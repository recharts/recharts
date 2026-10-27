import{r as f,R as e}from"./iframe-tjocxRUU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CC3Fea7J.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dxy8HPki.js";import{C as k}from"./ComposedChart-D8w-MoC_.js";import{X as K}from"./XAxis-Ds3HH0B9.js";import{L as v}from"./Legend-A6gk-x0n.js";import{B as a}from"./Bar-BH4xSSZn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CDvz32IL.js";import"./Text-DmRL3-09.js";import"./resolveDefaultProps-BcfnasjV.js";import"./pageBackground-C5tWOGC0.js";import"./ZIndexLayer-1nCesNvZ.js";import"./index-CjBb-5aG.js";import"./index-cbjgkIoT.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D1WllP0e.js";import"./throttle-BtJBXhY8.js";import"./dataEntryStyles-D26LCbZx.js";import"./axisSelectors-Bh1ZEFRN.js";import"./d3-scale-DxsTJ-Fh.js";import"./CartesianAxis-DzErZjsk.js";import"./Layer-YyRceVq5.js";import"./types-C53JcC0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dd6HrSiu.js";import"./index-Ccuv5XKu.js";import"./index-Ct8BdbUc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CFmoW3Jf.js";import"./index-E7H9Mo8F.js";import"./CartesianChart-BvDUjaEm.js";import"./ZIndexPortal-HUDzz5Yk.js";import"./CategoricalChart-BwEKGQoK.js";import"./Symbols-eM89l6Zr.js";import"./symbol-aequuKRH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cwd9kaUJ.js";import"./uniqBy-CCosKpyN.js";import"./iteratee-BVYnyUcL.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-C2EwX980.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nUsjOQfN.js";import"./useAnimationId-g7Nwbj-R.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbQcFRH2.js";import"./tooltipContext-DoMXm-JT.js";import"./RegisterGraphicalItemId-B4AeGnTP.js";import"./ErrorBarContext-ClXwNuC-.js";import"./activeStyles-BO5quCC2.js";import"./SetGraphicalItem-CJ8TRMDr.js";import"./getZIndexFromUnknown-B9nrNTyo.js";import"./useEffectiveDataKey-BAWm_Xnd.js";import"./omit-CcbPjjvC.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
