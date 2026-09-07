import{r as f,R as e}from"./iframe-CGBDVxE-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CATKcxKg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dcoi5C6v.js";import{C as k}from"./ComposedChart-BXiAbWC5.js";import{X as K}from"./XAxis-Ynp2iGfo.js";import{L as v}from"./Legend-geTiDdps.js";import{B as a}from"./Bar-mxXDfl1D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-rN0i5HX0.js";import"./Text-DzBijb3H.js";import"./resolveDefaultProps-DFx1_FeE.js";import"./DOMUtils-D0ua0v6z.js";import"./isWellBehavedNumber-BDUfwR7p.js";import"./useId-BXTAvIyb.js";import"./useBackwardsCompatibleTheme-B_EiPeE9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQMQ-79w.js";import"./index-hboVxxbY.js";import"./index-DBtrqjyz.js";import"./RechartsWrapper-R5wdE7Du.js";import"./axisSelectors-DpEiq2v9.js";import"./throttle-r4SgwsRS.js";import"./d3-scale-BEr64TMX.js";import"./index-BIKEo4sh.js";import"./index-WvwT3848.js";import"./renderedTicksSlice-D93v-Tca.js";import"./index-DyBKUzQK.js";import"./CartesianAxis-BmUJzq6P.js";import"./Layer-BQpheWca.js";import"./types-ALxpiXvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DkeZbNrD.js";import"./chartDataContext-BUzll-9F.js";import"./CategoricalChart-_qdlKxZa.js";import"./Symbols-JKCROK7U.js";import"./symbol-BL1c8F5w.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bo3nBkz1.js";import"./uniqBy-Dq6L1riV.js";import"./iteratee-DZ9WVhQn.js";import"./AnimatedItems-BodTqMda.js";import"./useAnimationId-Dg5PDt8u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BrNBFEk8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tQSQ8w1p.js";import"./tooltipContext-JrsZoYZm.js";import"./RegisterGraphicalItemId-B6GAZHe-.js";import"./ErrorBarContext-vv2ECrtE.js";import"./GraphicalItemClipPath-CHQFwdrq.js";import"./SetGraphicalItem-CIMjPr92.js";import"./getZIndexFromUnknown-BvlpvwUA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CeH-sbSH.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
