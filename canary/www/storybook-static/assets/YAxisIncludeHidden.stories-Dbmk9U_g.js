import{r as f,R as e}from"./iframe-CUSfJVGy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-cM-Or_OG.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DHvlitAO.js";import{C as k}from"./ComposedChart-hQ25gI1G.js";import{X as K}from"./XAxis-93B4Nx5D.js";import{L as v}from"./Legend-e14FWaDl.js";import{B as a}from"./Bar-DdYeBNOx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CA5pDLh0.js";import"./Text-D1HNj6gm.js";import"./resolveDefaultProps-eB2rdyhX.js";import"./pageBackground-Cedpup01.js";import"./isWellBehavedNumber-BlhXGToZ.js";import"./useId-KB6j76rh.js";import"./useBackwardsCompatibleTheme-C4dzzNKp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DS-kTeIC.js";import"./index-DM8acuEY.js";import"./index-BjrjF_sl.js";import"./dataEntryStyles-DaqIqY42.js";import"./axisSelectors-Ba-uagI8.js";import"./throttle-Dw_3NXl9.js";import"./d3-scale-B5gueGek.js";import"./CartesianAxis-DdmQm0Mb.js";import"./Layer-D3Rs15Eb.js";import"./types-CPjFjIqL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DTIkQgMV.js";import"./index-cWSuCV9A.js";import"./index-aMAZnXxU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DAlfJkzI.js";import"./index-BHb_Ppqj.js";import"./CartesianChart-CYmwXWF8.js";import"./chartDataContext-C8S7uA6r.js";import"./CategoricalChart-CCLAUHt0.js";import"./Symbols-CHaAXk1q.js";import"./symbol-BqGJ5wMY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DG-NqV_R.js";import"./uniqBy-_sTXg2vc.js";import"./iteratee-BWlFYs6V.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-D0GvvJcq.js";import"./useAnimationId-5nMvsn6t.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-vSbPEONY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-JeO-QszI.js";import"./tooltipContext-3r-229e7.js";import"./RegisterGraphicalItemId-Brr1oXEa.js";import"./ErrorBarContext-B4ne9aHr.js";import"./SetGraphicalItem-C-ccX4yH.js";import"./getZIndexFromUnknown-CLa-F4JY.js";import"./useEffectiveDataKey-CoJRTSM6.js";import"./omit-DzhfUKzn.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
