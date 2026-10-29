import{r as f,R as e}from"./iframe-LvrC9cNQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C7vYJVdQ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Chla-YhC.js";import{C as k}from"./ComposedChart-DQuHGzhG.js";import{X as K}from"./XAxis-ja2TXwgr.js";import{L as v}from"./Legend-BsVrMQDc.js";import{B as a}from"./Bar-Ua0zARqk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdT2eLCH.js";import"./Text-DGG_TkrL.js";import"./resolveDefaultProps-yQwV084p.js";import"./DOMUtils-CdIFc34u.js";import"./ZIndexLayer-Dv3aUmzs.js";import"./index-Dqr70K98.js";import"./index-D77JjdwQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMX56tfl.js";import"./throttle-BrACn0xJ.js";import"./axisSelectors-C8xBMBuJ.js";import"./d3-scale-CfvKpIbF.js";import"./CartesianAxis-D4FB0bCi.js";import"./Layer-CcIpGH5s.js";import"./types-Dk8bWHyp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BsmmD3xm.js";import"./index-LmwlvfKc.js";import"./index-Cxc9kCWG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CiGR2OiQ.js";import"./index-Bs0fdiGB.js";import"./CartesianChart-C9KorEin.js";import"./ZIndexPortal-DytdVxJW.js";import"./CategoricalChart-DgMeZkIA.js";import"./Symbols-Z0uJKVZu.js";import"./symbol-BDoGzdqc.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-CA9aYCap.js";import"./dataEntryStyles-CJNDsNBI.js";import"./useElementOffset-BZvICa72.js";import"./uniqBy-DfF6PSBk.js";import"./iteratee-Bmo_u-OE.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DdXF3DfJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D15iKpUy.js";import"./useAnimationId-BX5uo1zq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dyl71ZcK.js";import"./tooltipContext-D4P317Ja.js";import"./ErrorBarContext-CdeJUeJW.js";import"./activeStyles-MYCrrU5C.js";import"./SetGraphicalItem-CEH73uPW.js";import"./getZIndexFromUnknown-D7VTdN_Z.js";import"./useEffectiveDataKey-BIhhRaL_.js";import"./omit-DdDKpAPD.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
