import{r as f,R as e}from"./iframe-C76fCBLt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DFPJpwmP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BsJGnMmn.js";import{C as k}from"./ComposedChart-CsRNgK1V.js";import{X as K}from"./XAxis-BrBJ2mML.js";import{L as v}from"./Legend-Ctxci9eX.js";import{B as s}from"./Bar-TwoaKyrm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Cfu8bLFh.js";import"./Layer-COsfpmfI.js";import"./resolveDefaultProps-B-pRQb2R.js";import"./Text-BtH4Ru5e.js";import"./DOMUtils-BPYJD_VQ.js";import"./isWellBehavedNumber-6CN-Ynbl.js";import"./Label-Dx0etugK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTL30j5z.js";import"./index-DNHm-Slh.js";import"./index-DdHCa9pO.js";import"./types-BiK_KtGv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ChQt8XEs.js";import"./throttle-DuTovYxH.js";import"./RechartsWrapper-Dp2Q4tlU.js";import"./index-CKV5D6qs.js";import"./index-CdgAhURM.js";import"./axisSelectors-44DsbA90.js";import"./d3-scale-X-nthEaw.js";import"./CartesianChart-DpIJVUtf.js";import"./chartDataContext-xuvA9xY5.js";import"./CategoricalChart-BizDpfsn.js";import"./Symbols-B73T7BR7.js";import"./symbol-DJZWq1DC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BKWrj22b.js";import"./uniqBy-BisTCx5L.js";import"./iteratee-BmQyV-lV.js";import"./tooltipContext-qhCREoUJ.js";import"./AnimatedItems-QpEnlZxo.js";import"./useAnimationId-CEbYcbZq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCZ51hnY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PxqP6tZ6.js";import"./RegisterGraphicalItemId-D4GJEFJb.js";import"./ErrorBarContext-BvNNYD9p.js";import"./GraphicalItemClipPath-B6FRGk7o.js";import"./SetGraphicalItem-C9ktGnfi.js";import"./getZIndexFromUnknown-CqNbAGN-.js";import"./graphicalItemSelectors-CANcD4oO.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
