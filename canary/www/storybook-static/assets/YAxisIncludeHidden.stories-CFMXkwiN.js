import{r as f,R as e}from"./iframe-D7uas6gE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-W2Aym5bJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CAxEqTk2.js";import{C as k}from"./ComposedChart-Bu5G-rAT.js";import{X as K}from"./XAxis-Dlqp3Ogy.js";import{L as v}from"./Legend-CBZQ2xux.js";import{B as s}from"./Bar-VReZ4uq4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DF7xdNw5.js";import"./CartesianAxis-C9po9qUK.js";import"./Layer-CiOv_hF8.js";import"./resolveDefaultProps-D-Lsr8PC.js";import"./Text-BI32KZkM.js";import"./DOMUtils-BN2-dIl7.js";import"./isWellBehavedNumber-sBFjFrrH.js";import"./Label-CK9JMWUG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4cBgWge.js";import"./index-f8LaKELp.js";import"./index-Dk8a2p8j.js";import"./types-ChkVH57z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D97r0PID.js";import"./immer-Bz_FyVM_.js";import"./RechartsWrapper-DPySDgBx.js";import"./index-Dt2ZjhLE.js";import"./index-BtWXQEei.js";import"./axisSelectors-BhBGSIM3.js";import"./d3-scale-DiIEKRDM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-vfyIL2vN.js";import"./chartDataContext-BvY4an5W.js";import"./CategoricalChart-BfBc4XBk.js";import"./Symbols-Dbzz6utw.js";import"./symbol-CH5F53rQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BSHaZMpy.js";import"./uniqBy-BlE1Djfj.js";import"./iteratee-C3akJ9Jb.js";import"./tooltipContext-yxMcj-ay.js";import"./AnimatedItems-DfQiZ4K_.js";import"./useAnimationId-PEz7c_71.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiICusyV.js";import"./ActiveShapeUtils-BP0tkgwI.js";import"./RegisterGraphicalItemId-9gLwt1vY.js";import"./ErrorBarContext-B-gFvCKx.js";import"./GraphicalItemClipPath-DuOXc9m5.js";import"./SetGraphicalItem-BFYbkBHm.js";import"./getZIndexFromUnknown-Blk_Ptz7.js";import"./graphicalItemSelectors-CYuNarMa.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
