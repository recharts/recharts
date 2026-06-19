import{r as f,R as e}from"./iframe-DDa7m_LV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BVn2_RdR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BGDMq11w.js";import{C as k}from"./ComposedChart-DbnPvwSg.js";import{X as K}from"./XAxis-C_90q5ur.js";import{L as v}from"./Legend-CxQgI-pc.js";import{B as s}from"./Bar-B51h6kP-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BkRD0rv1.js";import"./CartesianAxis-BYwyVqNa.js";import"./Layer-DzM6lalT.js";import"./resolveDefaultProps-_rtxDhh1.js";import"./Text-CRfJilvw.js";import"./DOMUtils-jl9bWopj.js";import"./isWellBehavedNumber-BpYCTIWP.js";import"./Label-CwmoSFs2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DErURTRW.js";import"./index-DKvxLdaY.js";import"./index-CQwxmzXl.js";import"./types-BQpkl3V-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BldZtaeN.js";import"./immer-CDcbaTsx.js";import"./RechartsWrapper-BP1nC8TI.js";import"./index-xetC29GH.js";import"./index-Dqdzi7xh.js";import"./axisSelectors-B-E6faSk.js";import"./d3-scale-lQF3DEYD.js";import"./CartesianChart-DQyQReh2.js";import"./chartDataContext-BCuk8KYe.js";import"./CategoricalChart-B4hxnAvN.js";import"./Symbols-Cgr_wvH7.js";import"./symbol-C7zFXdlA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bqhv7_31.js";import"./uniqBy-CByu8z8H.js";import"./iteratee-nz0FM5kv.js";import"./tooltipContext-BJ-FXG7W.js";import"./AnimatedItems-B4Or3-X4.js";import"./useAnimationId-DndzYlXq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbWrvagV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUSMx5gC.js";import"./RegisterGraphicalItemId-D1XWxMPg.js";import"./ErrorBarContext-Cme-vC5F.js";import"./GraphicalItemClipPath-CN8GtY4s.js";import"./SetGraphicalItem-DU_Y3HPI.js";import"./getZIndexFromUnknown-BnLMP2kC.js";import"./graphicalItemSelectors-CMcm9wbK.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
