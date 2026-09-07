import{r as f,R as e}from"./iframe-BkeN00Xj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DJRwhJXR.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B-x7pTGs.js";import{C as k}from"./ComposedChart-o64gktPG.js";import{X as K}from"./XAxis-CtkFJuG7.js";import{L as v}from"./Legend-Bk8wjFJ6.js";import{B as a}from"./Bar-TEbFaxFg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C5oKPJnD.js";import"./Text-B4YmNBvy.js";import"./resolveDefaultProps-DZDkJdvH.js";import"./DOMUtils-BtNtGSBk.js";import"./isWellBehavedNumber-DpaF5Qbq.js";import"./useId-CoUZj2D9.js";import"./useBackwardsCompatibleTheme-CO7BXTf3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BM7jKjXD.js";import"./index-Ssjmhn91.js";import"./index-Doqq19He.js";import"./RechartsWrapper-C3Vxgl3Z.js";import"./axisSelectors-CdQeSFob.js";import"./throttle-DVvQgSvv.js";import"./d3-scale-59I2Ahhc.js";import"./index-Bp16jrAu.js";import"./index-CzDQGSqQ.js";import"./renderedTicksSlice-EekJT0xr.js";import"./index-BW_MIuEw.js";import"./CartesianAxis-LtwF5IC-.js";import"./Layer-CQvSRJEy.js";import"./types-CHY5UDxi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-HYPnZu6o.js";import"./chartDataContext-BeegK0cj.js";import"./CategoricalChart-acAC1yFW.js";import"./Symbols-AyonCz9c.js";import"./symbol-D8YHtFfZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B7hTb3Ey.js";import"./uniqBy-CPVlAjhe.js";import"./iteratee-xMasKDoT.js";import"./AnimatedItems-D-Ov5Ds2.js";import"./useAnimationId-DIIcOQR8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DByb3FOE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KH5PmLPO.js";import"./tooltipContext-ztpyaTwC.js";import"./RegisterGraphicalItemId-SBK7zBb4.js";import"./ErrorBarContext-CjOXvaZb.js";import"./GraphicalItemClipPath-BVRs7DWi.js";import"./SetGraphicalItem-BLpQqeaN.js";import"./getZIndexFromUnknown-Db7dNzRv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CDfU_78w.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
