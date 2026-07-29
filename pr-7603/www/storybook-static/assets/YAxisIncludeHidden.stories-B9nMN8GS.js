import{r as f,R as e}from"./iframe-BfLA0-xE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BCvzYcvQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CxHl2f9g.js";import{C as k}from"./ComposedChart-Bx2fTno4.js";import{X as K}from"./XAxis-WPatnG2H.js";import{L as v}from"./Legend-D9QWHZ9a.js";import{B as s}from"./Bar-Cl-Lo5Rp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KTqJ5zS0.js";import"./Text-ClB8EwPj.js";import"./resolveDefaultProps-DtsxpH35.js";import"./DOMUtils-AQyyON10.js";import"./isWellBehavedNumber-D8uyT4tB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-t--MbcyW.js";import"./index-B543iUM5.js";import"./index-BW364ill.js";import"./RechartsWrapper-BAR0yTLB.js";import"./index-BjcF9KIO.js";import"./index-Ua2Ph-JY.js";import"./throttle-B4u_I-fq.js";import"./renderedTicksSlice-CGglt0-o.js";import"./axisSelectors-k3PcgN9v.js";import"./d3-scale-d2-bssiM.js";import"./CartesianAxis-C347muns.js";import"./Layer-D2dAv-AD.js";import"./types-CMVKXdeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BFvPG-1n.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BkXNVBYX.js";import"./chartDataContext-CGwkpgmd.js";import"./CategoricalChart-Y3X7k6Lu.js";import"./Symbols-BgskHnHO.js";import"./symbol-DzagVwxY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cUYp3EBW.js";import"./uniqBy-B3gL9YDt.js";import"./iteratee-cDLRKSLL.js";import"./tooltipContext-6iBApvE7.js";import"./AnimatedItems-27DP4DZS.js";import"./useAnimationId-Uu44n6G0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJAi1gPv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DGNTXBhg.js";import"./RegisterGraphicalItemId-E0HC7VAQ.js";import"./ErrorBarContext-CpZDTVtA.js";import"./GraphicalItemClipPath-Cw3vhXUK.js";import"./SetGraphicalItem-DquyLFCZ.js";import"./getZIndexFromUnknown-Bo5w_uCr.js";import"./graphicalItemSelectors-BLLskjKC.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
