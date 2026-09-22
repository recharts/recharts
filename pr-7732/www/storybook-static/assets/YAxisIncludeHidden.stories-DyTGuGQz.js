import{r as f,R as e}from"./iframe-BJZoea5Q.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CuM9t2qy.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-3SrN7G8I.js";import{C as k}from"./ComposedChart-DAHls3zr.js";import{X as K}from"./XAxis-x49kq4XJ.js";import{L as v}from"./Legend-BlBBdJ0C.js";import{B as a}from"./Bar-wJzGkAfC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CKHttH-g.js";import"./Text-C846DGO8.js";import"./resolveDefaultProps-p2HAfk0o.js";import"./DOMUtils-DMsPd0Jf.js";import"./isWellBehavedNumber-PsmwNW5h.js";import"./useId-CgY4hBIS.js";import"./useBackwardsCompatibleTheme-cb-KLBvK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-gq-nfNXC.js";import"./index-eqi9YN1t.js";import"./index-BDOUu_G8.js";import"./RechartsWrapper-CEdFNSj2.js";import"./axisSelectors-10L_Paee.js";import"./throttle-DhjtP12Z.js";import"./d3-scale-Bo47ZJJr.js";import"./index-BdI0Temb.js";import"./index-Q3HRKpx2.js";import"./renderedTicksSlice-DjcslC9u.js";import"./index-ey4yeO--.js";import"./CartesianAxis-zlv9iD03.js";import"./Layer-CY8EZbPL.js";import"./types-DB2bYquS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DDkwxTw9.js";import"./chartDataContext-2iVlib8J.js";import"./CategoricalChart-DYS4mlap.js";import"./Symbols-CJSFJ2Z-.js";import"./symbol-nJQKKWnA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cr52qiLm.js";import"./uniqBy-C2cKh28N.js";import"./iteratee-DxckVfRJ.js";import"./AnimatedItems-B1n61v19.js";import"./useAnimationId-DIbB0gmH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DShU24mH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-t9roLBb8.js";import"./tooltipContext-DxIqc0tu.js";import"./RegisterGraphicalItemId-lL7ggMEp.js";import"./ErrorBarContext-CE1fn35z.js";import"./GraphicalItemClipPath-BEj7XwPx.js";import"./SetGraphicalItem-BvBiLTUU.js";import"./getZIndexFromUnknown-lmKOvfaZ.js";import"./useGraphicalItemIdentity-CiHiONr1.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
