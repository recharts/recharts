import{r as f,R as e}from"./iframe-DgKiVndY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DbeD2sP7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-dNuJcHRn.js";import{C as k}from"./ComposedChart-ZptqdVYs.js";import{X as K}from"./XAxis-BLbqPkVx.js";import{L as v}from"./Legend-KU81qJ72.js";import{B as a}from"./Bar-BqidhIqf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dw6GSad7.js";import"./Text-CbY3j4Ck.js";import"./resolveDefaultProps-D4xdWGM2.js";import"./DOMUtils-DDi-aYdE.js";import"./isWellBehavedNumber-D3WetmgY.js";import"./useId-DRmEtgtu.js";import"./useBackwardsCompatibleTheme-CVo9PiuG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CiPL_m_c.js";import"./index-ClqqO2lb.js";import"./index-DJwO8k8A.js";import"./RechartsWrapper-CVLdrR-G.js";import"./axisSelectors-IaZq8uO9.js";import"./throttle-C4KEmVOQ.js";import"./d3-scale-DcAUA4PB.js";import"./index-DtVHhaCV.js";import"./index-DmBw5bKk.js";import"./renderedTicksSlice-RB0exVxa.js";import"./index-CkxJWCtX.js";import"./CartesianAxis-O82DChWw.js";import"./Layer-CitR-d8V.js";import"./types-BGF6RwMG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BjKzNNSZ.js";import"./chartDataContext-Dv6GfWKh.js";import"./CategoricalChart-tj-0AtFI.js";import"./Symbols-D_JZU4lT.js";import"./symbol-Ccbl1gHX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D6g0REY2.js";import"./uniqBy-hF-kPyhu.js";import"./iteratee-CxgRG3tb.js";import"./AnimatedItems-t-O5cYrN.js";import"./useAnimationId-Df1EENv3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C7PgJRAr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-A4Sw_vLw.js";import"./tooltipContext-Br61voC1.js";import"./RegisterGraphicalItemId-D1zFL55b.js";import"./ErrorBarContext-D4mtJzrM.js";import"./GraphicalItemClipPath-CbvSbhMn.js";import"./SetGraphicalItem-BLJqw_fJ.js";import"./getZIndexFromUnknown-D1tG7Oz6.js";import"./useGraphicalItemIdentity-Mjj8dgtd.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
