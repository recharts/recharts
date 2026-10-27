import{r as f,R as e}from"./iframe-C-1IryXX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BNLMUv-C.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-fsCRj6jn.js";import{C as k}from"./ComposedChart-ldhMDYwV.js";import{X as K}from"./XAxis-DgA8soXs.js";import{L as v}from"./Legend-w7k-Gnvk.js";import{B as a}from"./Bar-3ypa2ByU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BTNrgHMM.js";import"./Text-bsivD33T.js";import"./resolveDefaultProps-BhlxPQQ0.js";import"./pageBackground-BsKy__Zx.js";import"./ZIndexLayer-DcusPv6z.js";import"./index-D_guE_NV.js";import"./index-BpW2h4nW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-nNfiNjC3.js";import"./throttle-_r7dS2f6.js";import"./dataEntryStyles-RoHSwMuf.js";import"./axisSelectors-DnbooZ92.js";import"./d3-scale-CK0ZBavL.js";import"./CartesianAxis-Boy6gEfE.js";import"./Layer-BY_4_n1M.js";import"./types-Ca1J50vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B4PG9UaR.js";import"./index-BM9qHJ3l.js";import"./index-CaHSXMyC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bb_GJAnC.js";import"./index-BbeXMPlB.js";import"./CartesianChart-X1Ss8Xb_.js";import"./ZIndexPortal-D1pWS7G9.js";import"./CategoricalChart-CCP7izw9.js";import"./Symbols-DkSC4tBr.js";import"./symbol-D09AuR3g.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CiN9yCdN.js";import"./uniqBy-CJHXXqVq.js";import"./iteratee-02qgE8DQ.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BgJAhVhH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQECHtGD.js";import"./useAnimationId-B4AGcQCE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B19_Z8K8.js";import"./tooltipContext-D0AVn9Xk.js";import"./RegisterGraphicalItemId-BAsbW75f.js";import"./ErrorBarContext-CMFEKiC-.js";import"./activeStyles-DZ3GRzLP.js";import"./SetGraphicalItem-DzD-3glG.js";import"./getZIndexFromUnknown-Bg2Titf7.js";import"./useEffectiveDataKey-B3UErnsT.js";import"./omit-DnswMPG2.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
