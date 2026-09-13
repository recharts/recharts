import{r as f,R as e}from"./iframe-DyrN_51d.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BoJncRS_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-20W2dW_I.js";import{C as k}from"./ComposedChart-D587OAML.js";import{X as K}from"./XAxis-BrvsOOq-.js";import{L as v}from"./Legend-DDrs35kw.js";import{B as a}from"./Bar-5e581GDj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BwFzhvIj.js";import"./Text-CV1ypZeZ.js";import"./resolveDefaultProps-Dqwg9Cw4.js";import"./DOMUtils-DIhf953N.js";import"./isWellBehavedNumber-BWb0p1O1.js";import"./useId-kCzHPj6p.js";import"./useBackwardsCompatibleTheme-Bt58M03l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bp9YTxbL.js";import"./index-JQNKXinH.js";import"./index-DXzoq_51.js";import"./RechartsWrapper-DkN-Eg1-.js";import"./axisSelectors-Bfr9Dapf.js";import"./throttle-Deocn2P3.js";import"./d3-scale-Dg7Uhedh.js";import"./index-Zhh87yRU.js";import"./index-B7rURxTX.js";import"./renderedTicksSlice-CRqt9_jA.js";import"./index-DdYmtx0a.js";import"./CartesianAxis-vw-O2ROQ.js";import"./Layer-Bhl1Azk1.js";import"./types-D2IYUNPt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BsXS56U5.js";import"./chartDataContext-5lrtEEYG.js";import"./CategoricalChart-DkwHwiOc.js";import"./Symbols-7Yfga5z7.js";import"./symbol-CDb3k9Xj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D2ZAhnE4.js";import"./uniqBy-D3fTQr9L.js";import"./iteratee-4xLB6-L6.js";import"./AnimatedItems-_Ln2HVFG.js";import"./useAnimationId-D9Lt2BUa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkR0YeyO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DpQnh-5h.js";import"./tooltipContext-DmPOkKme.js";import"./RegisterGraphicalItemId-CVmkVACh.js";import"./ErrorBarContext-Bxc1YjcQ.js";import"./GraphicalItemClipPath-CA7J29cH.js";import"./SetGraphicalItem-lGNUC0L0.js";import"./getZIndexFromUnknown-BBM42x_k.js";import"./useGraphicalItemIdentity-CBB7gohW.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
