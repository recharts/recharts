import{r as f,R as e}from"./iframe-B07BHG7b.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-9CqKZvPs.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DMtdtU0H.js";import{C as k}from"./ComposedChart-VKrjcxhK.js";import{X as K}from"./XAxis-CkRNVIdA.js";import{L as v}from"./Legend-Cg8WtWtD.js";import{B as a}from"./Bar-B4NDHbmR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DT0SDRud.js";import"./Text-CNYJT0YU.js";import"./resolveDefaultProps-BRBRD9Wj.js";import"./DOMUtils-BYXyET0J.js";import"./isWellBehavedNumber-BwS8-SkC.js";import"./useId-DpSDwQO_.js";import"./useBackwardsCompatibleTheme-BSstlxbW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BWiNey_Z.js";import"./index-C_4gdDDP.js";import"./index-OowKJhbY.js";import"./RechartsWrapper-CbwTx7DF.js";import"./axisSelectors-Nr5xjaNb.js";import"./throttle-DTIoaHkO.js";import"./d3-scale-C1HygQvU.js";import"./index-CnnKafP5.js";import"./index-Ch334nIE.js";import"./renderedTicksSlice-D6Y0A1v8.js";import"./index-Cay4G1Oz.js";import"./CartesianAxis-Bwpf-6f1.js";import"./Layer-DGsDthuj.js";import"./types-BfpKaUoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DjafEMNG.js";import"./chartDataContext-L5OvEFVH.js";import"./CategoricalChart-Dsa2Qc1B.js";import"./Symbols-dpsYkwK3.js";import"./symbol-BrftILDM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DyYSc7X1.js";import"./uniqBy-DWkLQ8w4.js";import"./iteratee-BtatVMfB.js";import"./AnimatedItems-BPQiX0OY.js";import"./useAnimationId-D8wc_hUQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cjft6Teu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DunyI-30.js";import"./tooltipContext-BBZjV5n1.js";import"./RegisterGraphicalItemId-r8grTaJr.js";import"./ErrorBarContext-CkRF2jvy.js";import"./GraphicalItemClipPath-CDDJymit.js";import"./SetGraphicalItem-CN2Fj3zB.js";import"./getZIndexFromUnknown-DAhB2MIj.js";import"./useGraphicalItemIdentity-BewjVzSI.js";import"./dataEntryStyles-CR7_WxBG.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
