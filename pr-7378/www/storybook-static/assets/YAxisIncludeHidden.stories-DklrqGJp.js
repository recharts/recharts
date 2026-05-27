import{u as f,e}from"./iframe-oV1i-tzu.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BMPOd6W0.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-Dfz61M-V.js";import{C}from"./ComposedChart-CghDMMCH.js";import{X as K}from"./XAxis-DW0bS2aQ.js";import{L as v}from"./Legend-CedVYhqN.js";import{B as s}from"./Bar-Bcslfzx9.js";import{R as x}from"./RechartsHookInspector-1T59QrJN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DOaYzv5V.js";import"./Layer-e51vonqH.js";import"./resolveDefaultProps-Cn2RP2Pv.js";import"./Text-rK0alIz0.js";import"./DOMUtils-DKzrOEzB.js";import"./Label-C9DqArbR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Hy5H_WVm.js";import"./zIndexSlice-CXZMcCd3.js";import"./immer-Ct3YneiL.js";import"./types-BU-8R6yi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C78Emj3z.js";import"./hooks-B5b3yGZZ.js";import"./axisSelectors-BRcov9Qp.js";import"./d3-scale-BCcM-CgQ.js";import"./RechartsWrapper-Saljze2a.js";import"./index-DdCYMcV3.js";import"./CartesianChart-DROGNedD.js";import"./chartDataContext-DEEDOj20.js";import"./CategoricalChart-otVHfWKe.js";import"./Symbols-C83T-EWb.js";import"./symbol-VawIigOH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BMz-Idks.js";import"./uniqBy-Cgghj1Ul.js";import"./iteratee-DiVCWJOm.js";import"./tooltipContext-Cy3c3L4r.js";import"./ReactUtils-wKdNeUqr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dox35F7s.js";import"./useAnimationId-DCUIw60r.js";import"./ActiveShapeUtils-CmSjpnmu.js";import"./RegisterGraphicalItemId-CbsLevva.js";import"./ErrorBarContext-CHQ5Dpbn.js";import"./GraphicalItemClipPath-C89Feiin.js";import"./SetGraphicalItem-BZBmijvN.js";import"./getZIndexFromUnknown-CiryGcSp.js";import"./graphicalItemSelectors-DpJi3KAW.js";import"./index-DHpYxSIP.js";import"./ChartSizeDimensions-COgON8GA.js";import"./OffsetShower-CXxqX1ML.js";import"./PlotAreaShower-DiLwgL_i.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,He as default};
