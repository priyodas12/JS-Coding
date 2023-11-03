var merge = function(nums1, m, nums2, n) {
    
    let nums3 = new Array(m + n);
    let i = 0, j = 0, k = 0;

    let f_arr = [...nums1].slice(0, m);
    console.log(f_arr);
    let s_arr = [...nums2].slice(0, n);
    console.log(s_arr);
    
    while (i < m && j < n) { 
        if (f_arr[i] < s_arr[j]) {
            nums3[k++] = f_arr[i++];
        } else { 
             nums3[k++] = s_arr[j++];
        }
    }

    for (; i < m; i++) { 
        nums3[k++] = f_arr[i];
    }

     for (; j < n; j++) { 
        nums3[k++] = s_arr[j];
    }
    console.log(nums3);
    return nums3;
};

nums1 = [1, 2, 3,0,0,0];
nums2=[2,5,6]
merge(nums1, 3, nums2, 3);