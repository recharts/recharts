import{r as f,R as e}from"./iframe-3nQ-xZag.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-D3gPtNIE.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dm-AMY-R.js";import{C as k}from"./ComposedChart-BTAIT8TE.js";import{X as K}from"./XAxis-DaNCZ6NZ.js";import{L as v}from"./Legend--w7PqQuJ.js";import{B as a}from"./Bar-itO9ecMI.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CB2UEG-j.js";import"./get-CjriyByo.js";import"./Label-CjKwBg5w.js";import"./Text-DQIY-xVt.js";import"./ZIndexLayer-5jwQGiTj.js";import"./index-GNDyZ-zm.js";import"./index-ByeDIwBG.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-dCOIGnCj.js";import"./throttle-VgoIbkK-.js";import"./axisSelectors-fNaznWMp.js";import"./d3-scale-Nv905U8s.js";import"./CartesianAxis-Bro405i1.js";import"./Layer-B7hf8wrq.js";import"./types-CveBZAlv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwWN8huf.js";import"./index-BQJ2UTdx.js";import"./index-D4meeqfk.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CLBNIVU_.js";import"./index-Diug9bjW.js";import"./fillDefinitions-BLnlF0KU.js";import"./CartesianChart-D8wOEODK.js";import"./chartDataContext-CxxFWOOm.js";import"./CategoricalChart-D8F0hlwY.js";import"./Symbols-tD_4MAA2.js";import"./symbol-34ANNL6v.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C7XMmhpG.js";import"./uniqBy-qypsR_Io.js";import"./iteratee-Oqe1JUBW.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-31cxgZsa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BmKAL7wU.js";import"./useAnimationId-JHyqMuIo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPk9lbeK.js";import"./tooltipContext-66QdrRb8.js";import"./ErrorBarContext-BrChGa93.js";import"./activeStyles-BALJdcO7.js";import"./SetGraphicalItem-CcSizHOA.js";import"./getZIndexFromUnknown-BYEJIr6H.js";import"./useEffectiveDataKey-DHnfGJ84.js";import"./omit-DPFHmdEz.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
