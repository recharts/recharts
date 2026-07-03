import{r as f,R as e}from"./iframe-Dlbg_GZB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-K45jOkJG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CMn4Cwlm.js";import{C as k}from"./ComposedChart-BqgVwKSR.js";import{X as K}from"./XAxis-g3Yqs_q0.js";import{L as v}from"./Legend-D4rjc0mf.js";import{B as s}from"./Bar-BeXlCBS6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-dbSJQeo2.js";import"./Layer-DlhGxg7N.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./Label-d3wc6rF5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-feAlcx_0.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./types-Ctdv5TaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./throttle-C3Y4hQMj.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./axisSelectors-C_hiMAlk.js";import"./d3-scale-DJYjYDtT.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./Symbols-CUnsQXWy.js";import"./symbol-BBKXJ5vn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDDZoyN1.js";import"./uniqBy-DQCU_Q9Y.js";import"./iteratee-CC9cIx0G.js";import"./tooltipContext-DM-EFah7.js";import"./AnimatedItems-xmicP7QL.js";import"./useAnimationId-K2Oa5cBe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRztim86.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./getZIndexFromUnknown-DeLKnrFD.js";import"./graphicalItemSelectors-Bb2tv3Tj.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
