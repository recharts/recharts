import{r as f,R as e}from"./iframe-B_vrQl8R.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BnsZeISF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cxwz8Tl-.js";import{C as k}from"./ComposedChart-yc7O9hvj.js";import{X as K}from"./XAxis-Ci68TUER.js";import{L as v}from"./Legend-Du6_K_PV.js";import{B as s}from"./Bar-DxwI6afl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BAwOMXAP.js";import"./Layer-Gd_R9sAX.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./Text-DHNSM_o8.js";import"./DOMUtils-BvPkU0IV.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./Label-CvVA6TIG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUE9jsMX.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./types-B9Larr1k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./throttle-Dyk5owXH.js";import"./RechartsWrapper-6qr9rM4_.js";import"./index-DskW-dUs.js";import"./index-HEwSZYID.js";import"./axisSelectors-DWL2EjSK.js";import"./d3-scale-ByBkJlb2.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";import"./Symbols-CPIDLIMe.js";import"./symbol-BCVeltSM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_HGDiJC.js";import"./uniqBy-DUbYgYPG.js";import"./iteratee-D-mRmhpM.js";import"./tooltipContext-B3E0RZ-k.js";import"./AnimatedItems-CSL9mSPk.js";import"./useAnimationId-DAjnsWww.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-q-Ta0Kiu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-a0kgZEBq.js";import"./RegisterGraphicalItemId-Be581UAk.js";import"./ErrorBarContext-DjPqL-MC.js";import"./GraphicalItemClipPath-Bv2rP4gQ.js";import"./SetGraphicalItem-BqgYDJXb.js";import"./getZIndexFromUnknown-Dvst-Ctq.js";import"./graphicalItemSelectors-BKPq2-mP.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
