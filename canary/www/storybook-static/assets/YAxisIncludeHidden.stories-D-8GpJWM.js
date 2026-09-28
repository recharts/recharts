import{r as f,R as e}from"./iframe-_TSN2GeP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CFqjD2S5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D96uBoAp.js";import{C as k}from"./ComposedChart-z5izNflA.js";import{X as K}from"./XAxis-BsztGX7X.js";import{L as v}from"./Legend-CuaodD7Y.js";import{B as a}from"./Bar-CZY88mHn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-mOwsaJBj.js";import"./Text-E_mkl092.js";import"./resolveDefaultProps-D9QDYjax.js";import"./DOMUtils-FVlzESpl.js";import"./isWellBehavedNumber-BNbTdqm3.js";import"./useId-BhIopQFv.js";import"./useBackwardsCompatibleTheme-B-7Qbbn2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CuHtjJTp.js";import"./index-CCkkuyTr.js";import"./index-CSNAsU0S.js";import"./RechartsWrapper-BXs5OB5c.js";import"./axisSelectors-Dd3nK3xc.js";import"./throttle-Cil6wORT.js";import"./d3-scale-BkrsrexO.js";import"./index-DMuyjDG0.js";import"./index-lnFbewhe.js";import"./renderedTicksSlice-9FoMOBwW.js";import"./index-BghYN9OX.js";import"./CartesianAxis-DiCtkIDj.js";import"./Layer-9vgq1u7o.js";import"./types-DD8CfvEw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CBmykTvx.js";import"./chartDataContext-Beyv08KU.js";import"./CategoricalChart-DrCkbeNv.js";import"./Symbols-CVMCwj0Q.js";import"./symbol-BZoobV8K.js";import"./path-DyVhHtw_.js";import"./useElementOffset-HEsArA2s.js";import"./uniqBy-DTFHfYak.js";import"./iteratee-deCpNbOg.js";import"./AnimatedItems-DzytQgaE.js";import"./useAnimationId-JMLdgXcg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bnIY1oY8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B-Is-yHc.js";import"./tooltipContext-4fvmduU2.js";import"./RegisterGraphicalItemId-DtZ0Q-pq.js";import"./ErrorBarContext-DL7P0RQ2.js";import"./GraphicalItemClipPath-CV0_mPKt.js";import"./SetGraphicalItem-BDNu96CY.js";import"./getZIndexFromUnknown-C48go_7M.js";import"./useGraphicalItemIdentity-D0CKpQKL.js";import"./dataEntryStyles-Bf3y5Q1l.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
