import{r as f,R as e}from"./iframe-CmqkAU55.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DokLpr5R.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DttPm2yG.js";import{C as k}from"./ComposedChart-B_dZznJ_.js";import{X as K}from"./XAxis-iMrKHVYZ.js";import{L as v}from"./Legend-RJEgd_mc.js";import{B as s}from"./Bar-C7_jDiVs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CI9Aa94q.js";import"./Text-DFCCUK93.js";import"./resolveDefaultProps-BMY6nxFh.js";import"./DOMUtils-DDl9EDuG.js";import"./isWellBehavedNumber-eRUuJPZy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8NE7f7O.js";import"./index-CrNK6q9O.js";import"./index-Ccra80NE.js";import"./RechartsWrapper-CdZHTDnE.js";import"./index-ImOuOX5i.js";import"./index-BIMQ5lZl.js";import"./throttle-45H0AIAq.js";import"./axisSelectors-v6b69rA0.js";import"./d3-scale-CM34ZdGn.js";import"./renderedTicksSlice-CSz7jA9g.js";import"./CartesianAxis--fgQsGIr.js";import"./Layer-JlYR6W_Z.js";import"./types-DD7WKq2Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C9_zddkn.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DHPjYa1I.js";import"./chartDataContext-CiMrnFkp.js";import"./CategoricalChart-CAeMU4C2.js";import"./Symbols-C4thdfWB.js";import"./symbol-0w4LQdk2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D43pW8Ac.js";import"./uniqBy-BsBYuXDT.js";import"./iteratee-oLUN46Ox.js";import"./tooltipContext-CrR8cJ2x.js";import"./AnimatedItems-CEenLt2d.js";import"./useAnimationId-DOKlurUN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B7ctYemZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJK8znX0.js";import"./RegisterGraphicalItemId-DkK-FjDI.js";import"./ErrorBarContext-BQBXXX5z.js";import"./GraphicalItemClipPath-bjx9wsKp.js";import"./SetGraphicalItem-Bg0mOoGz.js";import"./getZIndexFromUnknown-DQOFV6cF.js";import"./graphicalItemSelectors-DQSzFvnt.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
