import{r as f,R as e}from"./iframe-CqRpABaK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-qoSfFU5r.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-KvzMEBh7.js";import{C as k}from"./ComposedChart-DCUriljY.js";import{X as K}from"./XAxis-BSRwnZMq.js";import{L as v}from"./Legend-DisbDxLC.js";import{B as a}from"./Bar-BpDOsHkr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-IjPv9f7P.js";import"./Text-CXo2baHO.js";import"./resolveDefaultProps-Dp9amxWt.js";import"./DOMUtils-DJUl9uN8.js";import"./isWellBehavedNumber-CUSt0J5q.js";import"./useId-BbgR7tKy.js";import"./useBackwardsCompatibleTheme-DXXC_Hh5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D34xXT-L.js";import"./index-TAONuQw1.js";import"./index-D1EEl4o-.js";import"./RechartsWrapper-Q6-Ges1c.js";import"./axisSelectors-Bh6roEOt.js";import"./throttle-BjLrRmHo.js";import"./d3-scale-DITi7lUc.js";import"./index-DhXYHAxS.js";import"./index-Bn22tw5D.js";import"./renderedTicksSlice-Ddky5d5u.js";import"./index-BT_XvWwU.js";import"./CartesianAxis-NW0JLUgH.js";import"./Layer-g-5IuUpa.js";import"./types-CC73-uTJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bxw3yjgR.js";import"./chartDataContext-Cz0raIOD.js";import"./CategoricalChart-yTIhx19f.js";import"./Symbols-Y4gf4X3g.js";import"./symbol-nTVagevz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MH0vo0Hf.js";import"./uniqBy-wzlT94X_.js";import"./iteratee-D6dIEdRH.js";import"./AnimatedItems-CBpEgVGL.js";import"./useAnimationId-BJd8TCij.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNnTJ1N9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EpogqgxJ.js";import"./tooltipContext-BCXkmq96.js";import"./RegisterGraphicalItemId-B1YLlZGq.js";import"./ErrorBarContext-CYofUAqs.js";import"./GraphicalItemClipPath-BVicx7bF.js";import"./SetGraphicalItem-B8cx_Fws.js";import"./getZIndexFromUnknown-Bp1qflbJ.js";import"./useGraphicalItemIdentity-BjVJGRyR.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
