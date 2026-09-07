import{r as f,R as e}from"./iframe-oSm8ncin.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BivtkPP6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DvT_amFo.js";import{C as k}from"./ComposedChart-BTCoOoqj.js";import{X as K}from"./XAxis-rWMx021r.js";import{L as v}from"./Legend-zntpUH-c.js";import{B as a}from"./Bar-Dorjniof.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DPyx96_s.js";import"./Text-BWvwrxPl.js";import"./resolveDefaultProps-CiTJI47d.js";import"./DOMUtils-BGxUAFyQ.js";import"./isWellBehavedNumber-CCMQKmI-.js";import"./useId-BLP9z_DT.js";import"./useBackwardsCompatibleTheme-B6W0Pzfd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Csw-EOMR.js";import"./index-BcLgASAz.js";import"./index-DhJ936Cx.js";import"./RechartsWrapper-DD_spGc2.js";import"./axisSelectors-CKiFWBK6.js";import"./throttle-Cx1ccipN.js";import"./d3-scale-VuQaHR8V.js";import"./index-BEgTYoe2.js";import"./index-Bu5ia8Fq.js";import"./renderedTicksSlice-DvZXVX5V.js";import"./index-b9HoDQHW.js";import"./CartesianAxis-DnYW7AG9.js";import"./Layer-DyWXZatW.js";import"./types-DFgJchiK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-kW9NXKsO.js";import"./chartDataContext-Bj9GKAto.js";import"./CategoricalChart-_S_x7otk.js";import"./Symbols-DoWcadNt.js";import"./symbol-DwizSsDc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4nozGT_V.js";import"./uniqBy-BItzAnk5.js";import"./iteratee-CvG7v8HH.js";import"./AnimatedItems-BqDLnMl8.js";import"./useAnimationId-Bxm77g86.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kf9gK_tK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_Yr1SfA.js";import"./tooltipContext-CdjrfRy-.js";import"./RegisterGraphicalItemId-BjlJzRIf.js";import"./ErrorBarContext--MZg4-Ns.js";import"./GraphicalItemClipPath-B4m_JP2k.js";import"./SetGraphicalItem-3c27uR51.js";import"./getZIndexFromUnknown-GPJC2rgR.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Be2NxRtb.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
