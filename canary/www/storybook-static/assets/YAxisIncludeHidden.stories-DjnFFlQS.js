import{r as f,R as e}from"./iframe-Brw_3xg7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B_qMueqj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-2iAxrZkm.js";import{C as k}from"./ComposedChart-DXqSl_Jh.js";import{X as K}from"./XAxis-DXhKRI9c.js";import{L as v}from"./Legend-BbfEXsAv.js";import{B as a}from"./Bar-EnH22Jp1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CpCnMIaY.js";import"./Text-DAJ7DyY-.js";import"./resolveDefaultProps-6Y628-3q.js";import"./DOMUtils-Df1YjqfK.js";import"./isWellBehavedNumber-CKWY2x6w.js";import"./useId-DReBIxno.js";import"./useBackwardsCompatibleTheme-bimwwtgB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DvhvnUDg.js";import"./index-CtKZ7ilo.js";import"./index-BzcphCAG.js";import"./RechartsWrapper-CMScH4Y-.js";import"./axisSelectors-BgtJq2Kp.js";import"./throttle-ConCS3s7.js";import"./d3-scale-DDiKCNKi.js";import"./index-BcnaSdn8.js";import"./index-DAIxs-aJ.js";import"./renderedTicksSlice-7YaTp-wU.js";import"./index-DZwFur8w.js";import"./CartesianAxis-DBWQUVsj.js";import"./Layer-U4JZqCxa.js";import"./types-BTkYx2NR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D0m-K2vW.js";import"./chartDataContext-B_uwNVrC.js";import"./CategoricalChart-CtbAzaJE.js";import"./Symbols-DBitbmPf.js";import"./symbol-DlOMBTws.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0IEKM2v.js";import"./uniqBy-DcxgoEQg.js";import"./iteratee-DhCw4nN3.js";import"./AnimatedItems-O-Ra8tLQ.js";import"./useAnimationId-LBf_tWSw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNj8eYAZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DolYUreE.js";import"./tooltipContext-BvyQs14N.js";import"./RegisterGraphicalItemId-11bybKxG.js";import"./ErrorBarContext-FTmrznrA.js";import"./GraphicalItemClipPath-SQ9_TryA.js";import"./SetGraphicalItem-CcGmMfg9.js";import"./getZIndexFromUnknown-BA5CbnJG.js";import"./useGraphicalItemIdentity-CdCNj1VU.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
