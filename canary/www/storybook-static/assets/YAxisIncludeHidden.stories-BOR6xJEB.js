import{r as f,R as e}from"./iframe-C-D94QkC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-gSjGcUn4.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BKwIbV_L.js";import{C as k}from"./ComposedChart-B8BsA69h.js";import{X as K}from"./XAxis-CUwTyuxs.js";import{L as v}from"./Legend-CM_99vEO.js";import{B as s}from"./Bar-oPfR9M-J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DdUGRqEL.js";import"./Layer-CmhR3M6w.js";import"./resolveDefaultProps-I0oO3hVe.js";import"./Text-BGLH01e4.js";import"./DOMUtils-CTJUeuSO.js";import"./isWellBehavedNumber-CW3dwjTv.js";import"./Label-CEdJYykS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D0m4rTFg.js";import"./index-BIeQrv2Z.js";import"./index-CTfmrlJH.js";import"./types-BVMbYXvi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DheIhU3o.js";import"./throttle-2piy3LIT.js";import"./RechartsThemeContext-FU4W4bTr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-C8SdZUxr.js";import"./index-CVumJag_.js";import"./index-Dq3qqcGT.js";import"./axisSelectors-RkZJ2biJ.js";import"./d3-scale-DDXy3r7j.js";import"./CartesianChart-DbK0sv1B.js";import"./chartDataContext-BuH_IHSv.js";import"./CategoricalChart-ChFoWP6Y.js";import"./Symbols-Cww2ej7G.js";import"./symbol-DQDhapF0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvCPVQU2.js";import"./uniqBy-Dbcfcj0B.js";import"./iteratee-DSgJFqTf.js";import"./tooltipContext-DC1yWL3Z.js";import"./AnimatedItems-CNnKFhUF.js";import"./useAnimationId-Qux1tHbm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbIEjk7Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-mVYQLGWO.js";import"./RegisterGraphicalItemId-BEroCjsR.js";import"./ErrorBarContext-xYFd4kf3.js";import"./GraphicalItemClipPath-D86AO83t.js";import"./SetGraphicalItem-D38tmZrb.js";import"./getZIndexFromUnknown-DUi7QXhQ.js";import"./graphicalItemSelectors-B-svnAv6.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
