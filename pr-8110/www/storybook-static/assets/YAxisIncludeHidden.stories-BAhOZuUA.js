import{r as f,R as e}from"./iframe-Cr7yvMyR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CzA9LN6m.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CsHxFK6N.js";import{C as k}from"./ComposedChart-Br0t_Hun.js";import{X as K}from"./XAxis-6YWl141g.js";import{L as v}from"./Legend-C_9JRBub.js";import{B as a}from"./Bar-DVfa4EfK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bde3ooKp.js";import"./Text-Bgk62K3n.js";import"./resolveDefaultProps-7XokfeB_.js";import"./DOMUtils-DpKBhuMF.js";import"./ZIndexLayer-DE1YK584.js";import"./index-BW-7B_Oi.js";import"./index-BxNxBv76.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bu65NBmY.js";import"./throttle-RI9qCIcF.js";import"./axisSelectors-BefgmR9V.js";import"./d3-scale-DsBZl9Yj.js";import"./CartesianAxis-CEqebLVd.js";import"./Layer-Dr_Plb3q.js";import"./types-NTnKzXXZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BFO9fjGk.js";import"./index-D9o51X71.js";import"./index-DqRp8Gio.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DtToZ6Qn.js";import"./index-DcWjrMSV.js";import"./CartesianChart-BdMrkwen.js";import"./ZIndexPortal-BAJpkEGh.js";import"./CategoricalChart-Cyp6BiKR.js";import"./Symbols-BTpF-zfb.js";import"./symbol-AnQJSsJ7.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C6DfZjQD.js";import"./dataEntryStyles-Df9giDaD.js";import"./useElementOffset-DLS-U19J.js";import"./uniqBy-WRjYJOFh.js";import"./iteratee-ru1DkRCS.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DKDyf66o.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CzWgcXDx.js";import"./useAnimationId-CrRcWCxT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DimJ4nan.js";import"./tooltipContext-ifh8sNcF.js";import"./ErrorBarContext-DICVo2af.js";import"./activeStyles-4Qukhfp5.js";import"./SetGraphicalItem-CPzrGo_B.js";import"./getZIndexFromUnknown-tEuScjx0.js";import"./useEffectiveDataKey-DcbjY3Lr.js";import"./omit-CIkpQC4Z.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
