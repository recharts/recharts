import{r as f,R as e}from"./iframe-Dv2mkDD6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CqyybjBv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-2fg2g2Dp.js";import{C as k}from"./ComposedChart-IQb96AId.js";import{X as K}from"./XAxis-CXyJf7fo.js";import{L as v}from"./Legend-DivKGV7P.js";import{B as s}from"./Bar-C4QQbTtV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-EiM4K4Yy.js";import"./CartesianAxis-DFbvktXE.js";import"./Layer-BkXvHIXh.js";import"./resolveDefaultProps-pfm2KtVH.js";import"./Text-CEJxHZH-.js";import"./DOMUtils-CJIsN_cb.js";import"./isWellBehavedNumber-DWptWa3e.js";import"./Label-Cr9zsE7b.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-pZIzemBm.js";import"./index-9bEp3bq8.js";import"./index-Ds7CCKWE.js";import"./types-CH3zmrHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-COLD4oXN.js";import"./immer-CP6W9K53.js";import"./RechartsWrapper-CkEfkKBB.js";import"./index-CbNA4IYq.js";import"./index-CX6QVWJd.js";import"./axisSelectors-BxD9EJGH.js";import"./d3-scale-DIID899h.js";import"./CartesianChart-NBwPQSms.js";import"./chartDataContext-BOvLrxST.js";import"./CategoricalChart-CYR6VSGv.js";import"./Symbols-sY2INCLz.js";import"./symbol-D39yft-5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-1T9XAteM.js";import"./uniqBy-CaeqsPkF.js";import"./iteratee-BHtdL65p.js";import"./tooltipContext-gIRAXb4Q.js";import"./AnimatedItems-D9UxuFUl.js";import"./useAnimationId-eauTaXpl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DendxdxL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DZxftlok.js";import"./RegisterGraphicalItemId-CjWM_Bfz.js";import"./ErrorBarContext-D_yXcxuv.js";import"./GraphicalItemClipPath-BtBW0RWE.js";import"./SetGraphicalItem-LAI4OSkO.js";import"./getZIndexFromUnknown-DY9XqzRJ.js";import"./graphicalItemSelectors-Zjg8Zcv4.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
