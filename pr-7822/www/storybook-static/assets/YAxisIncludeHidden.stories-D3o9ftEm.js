import{r as f,R as e}from"./iframe-BBXYJHV9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BTJMRiMh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DeV5nVkQ.js";import{C as k}from"./ComposedChart-CI6CKZVa.js";import{X as K}from"./XAxis-OTNhB7fI.js";import{L as v}from"./Legend-B0OYWchs.js";import{B as a}from"./Bar-DLUN89zU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-lRXxfB4K.js";import"./Text-D82BKuR8.js";import"./resolveDefaultProps-Cuufas3t.js";import"./DOMUtils-CzO3u12F.js";import"./isWellBehavedNumber-Df9i-Xuh.js";import"./useId-B4ofBqjM.js";import"./useBackwardsCompatibleTheme-DCcJalTw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTr1Fcax.js";import"./index-CKKng9rb.js";import"./index-DD1sJSjK.js";import"./RechartsWrapper--QMYLh37.js";import"./axisSelectors-ldrqaVXy.js";import"./throttle-D_5C5TP0.js";import"./d3-scale-Cim9t_7k.js";import"./index-C1POlg4L.js";import"./index-DaLQCs1D.js";import"./renderedTicksSlice-D2BRqvUe.js";import"./index-CyGTPXip.js";import"./CartesianAxis-a8cTgv_e.js";import"./Layer-CLVZjsru.js";import"./types-Bf4vH5cc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Sq09cuqY.js";import"./chartDataContext-CvGK2QEJ.js";import"./CategoricalChart-BQqZpjdB.js";import"./Symbols-BkHE8TEA.js";import"./symbol-CFAfa1rt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DEgSccfA.js";import"./uniqBy-CSB_7q17.js";import"./iteratee--uwqTho3.js";import"./AnimatedItems-Szq-E2F-.js";import"./useAnimationId-CBIZAPE4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BdigyXl7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcqMOZEc.js";import"./tooltipContext-C8i3kdxv.js";import"./RegisterGraphicalItemId-B-07fAKx.js";import"./ErrorBarContext-CrrVco2B.js";import"./GraphicalItemClipPath-h1d35KAS.js";import"./SetGraphicalItem-Dp4v1WTr.js";import"./getZIndexFromUnknown-DTOzMFVG.js";import"./useGraphicalItemIdentity-DpGCweuE.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
