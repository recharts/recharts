import{r as f,R as e}from"./iframe-CLlZb5WL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BLqAl2VU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C-cLRtN4.js";import{C as k}from"./ComposedChart-S27VwcuA.js";import{X as K}from"./XAxis-DBuW-REH.js";import{L as v}from"./Legend-Fqz34m2F.js";import{B as a}from"./Bar-CT8HYe9B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-yyQZOpZ1.js";import"./Text-B9EUqwyc.js";import"./resolveDefaultProps-CUiHCny8.js";import"./pageBackground-2CAg07jP.js";import"./isWellBehavedNumber-BwmlGv0Y.js";import"./useId-kcUEvBg4.js";import"./useBackwardsCompatibleTheme-Bfo5Qe72.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Buoz0PG0.js";import"./index-BdtMEJny.js";import"./index-DCzwXD2o.js";import"./axisSelectors-CGMVEYME.js";import"./throttle--RnCkAem.js";import"./d3-scale-ehl80MUm.js";import"./CartesianAxis-CxGxQBTe.js";import"./Layer-BuwGQM2R.js";import"./types-nJd33CGk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DFlg4CzS.js";import"./index-BYYf9lpv.js";import"./index-Do3i96_1.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BEo8N9ka.js";import"./index-BIUIHb15.js";import"./CartesianChart-CHomC56b.js";import"./chartDataContext-CuhB7l0S.js";import"./CategoricalChart-v23si-Wq.js";import"./Symbols-CQNoTje8.js";import"./symbol-CCuh3uUP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Po4dJUCP.js";import"./uniqBy-Cz2J3eef.js";import"./iteratee-CPLYA7dn.js";import"./activeStyles-BadvgHow.js";import"./useAnimationId-DDy-DT0X.js";import"./dataEntryStyles-DY-TrJ76.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Coa83haY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-_yNwwF4x.js";import"./tooltipContext-DM4tfHae.js";import"./ErrorBarContext-Bdt01u1A.js";import"./GraphicalItemClipPath-DZFjU2Jb.js";import"./SetGraphicalItem-B9oKhYwJ.js";import"./getZIndexFromUnknown-BfULm-LP.js";import"./useEffectiveDataKey-DITcK2E7.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
