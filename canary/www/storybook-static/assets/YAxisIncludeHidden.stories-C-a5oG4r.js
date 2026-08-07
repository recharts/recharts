import{r as f,R as e}from"./iframe-CLOWWJpx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-QbO3_x34.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Chs4RMZ4.js";import{C as k}from"./ComposedChart-CUtdgPf9.js";import{X as K}from"./XAxis-5aclO3SU.js";import{L as v}from"./Legend-iijpXeNh.js";import{B as s}from"./Bar-DBIDxHy7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DG_GQs1i.js";import"./Text-CoBlae8g.js";import"./resolveDefaultProps-DCKMEUHg.js";import"./DOMUtils-cc_L-yud.js";import"./isWellBehavedNumber-Bkt9PZby.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NdFk7Llr.js";import"./index-D8vkw_WC.js";import"./index-CvPaOhKY.js";import"./RechartsWrapper-PtmXkiLl.js";import"./index-CoemtFTs.js";import"./index-gsgSuvG_.js";import"./throttle-NR7rmq0H.js";import"./axisSelectors-B6C-iAl6.js";import"./d3-scale-BWgGZ0ZC.js";import"./renderedTicksSlice-Dqa_BZU0.js";import"./CartesianAxis-Cg5r0ZYC.js";import"./Layer-GlnJsptq.js";import"./types-B-e_P8o7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CG7dbDKG.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BghZLmrY.js";import"./chartDataContext-CMbA824e.js";import"./CategoricalChart--VJeMiVR.js";import"./Symbols-HF_kJStw.js";import"./symbol-TVKKDHlk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BxZhDmns.js";import"./uniqBy-Cl6wEbNY.js";import"./iteratee-CSycNkZJ.js";import"./tooltipContext-DIMJSl8I.js";import"./AnimatedItems-DKcQidly.js";import"./useAnimationId-CXs0-Peu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CzlrgWAJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6rRdWU2Q.js";import"./RegisterGraphicalItemId-D8sZKmnj.js";import"./ErrorBarContext-zURr2Pa5.js";import"./GraphicalItemClipPath-CzZgXvBv.js";import"./SetGraphicalItem-DBtV5dO_.js";import"./getZIndexFromUnknown-BU4F7dti.js";import"./graphicalItemSelectors-CUFuPwBb.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
