import{r as f,R as e}from"./iframe-CpWBjTvp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-3eU4T95U.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DUDjamRK.js";import{C as k}from"./ComposedChart-BVHJhCwJ.js";import{X as K}from"./XAxis-WebSLI5n.js";import{L as v}from"./Legend-DfE89ulZ.js";import{B as a}from"./Bar-D_bMMxnZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BHRweOLu.js";import"./Text-BafsCBcm.js";import"./resolveDefaultProps-NIjw2OgC.js";import"./pageBackground-CKOzv8y-.js";import"./ZIndexLayer-BbGGEaTO.js";import"./index-BsKHwb8S.js";import"./index-BEj8e0rp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cbbt3MrT.js";import"./throttle-D3Uoll6g.js";import"./axisSelectors-DP-Cq8x3.js";import"./d3-scale-9EE4QQRc.js";import"./CartesianAxis-CgwFl8Jq.js";import"./Layer-DcRKRX6x.js";import"./types-BKpcX7F2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DvLiRaDl.js";import"./index-BKdflUfl.js";import"./index-mAc_XfwU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DxDmVade.js";import"./index-xtKZJIPQ.js";import"./CartesianChart-2SX8QMEH.js";import"./ZIndexPortal-D23JLhQd.js";import"./CategoricalChart-tOUFzxMq.js";import"./Symbols-D-1GfXlL.js";import"./symbol-C1ODNnyl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BB9lz8UY.js";import"./uniqBy-BEMNrNmR.js";import"./iteratee-NM3yHH-L.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-B0vE2GKD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrAVfzV4.js";import"./useAnimationId-qe3YUtTg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DpSDZTd0.js";import"./tooltipContext-CxhFuor7.js";import"./dataEntryStyles-BMyxGDVI.js";import"./ErrorBarContext-Bmj1TjNN.js";import"./activeStyles-CPrr7d0w.js";import"./SetGraphicalItem-Bf14-AlA.js";import"./getZIndexFromUnknown-Cleopx-N.js";import"./useEffectiveDataKey-CmhiZ1Bu.js";import"./omit-B9VWdMkR.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
