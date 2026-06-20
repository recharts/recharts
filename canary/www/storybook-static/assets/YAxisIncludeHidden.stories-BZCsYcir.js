import{r as f,R as e}from"./iframe-DktoyP0I.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BLG3LfpU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BqxjHKrS.js";import{C as k}from"./ComposedChart-BDFJsZWU.js";import{X as K}from"./XAxis-BxV59Hhm.js";import{L as v}from"./Legend-D_vAGg8j.js";import{B as s}from"./Bar-L0JQbVPe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DZQ4X22M.js";import"./CartesianAxis-DrMR96cw.js";import"./Layer-DxVIdqTA.js";import"./resolveDefaultProps-Bs_-cxps.js";import"./Text-DAKApr79.js";import"./DOMUtils-JSCS2paE.js";import"./isWellBehavedNumber-D7-lB0Sk.js";import"./Label-BR89T_1_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CSsqT-BM.js";import"./index-Be24bbvM.js";import"./index-BFyGHYnF.js";import"./types-CkRwSSe-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cd_bo-5U.js";import"./immer-yOjEFYCA.js";import"./RechartsWrapper-C48Z7D7H.js";import"./index-CjF-Q638.js";import"./index-B91yukul.js";import"./axisSelectors-C830vntb.js";import"./d3-scale-BMKK7LPO.js";import"./CartesianChart-cbrKpDvd.js";import"./chartDataContext-BtRoA9Zg.js";import"./CategoricalChart-DGVvOUvV.js";import"./Symbols-DQImXh-h.js";import"./symbol-BtGhTASL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DtCbKcDO.js";import"./uniqBy-CohtIUwX.js";import"./iteratee-CM3ogl-V.js";import"./tooltipContext-JGAd4NEt.js";import"./AnimatedItems-cIeOyNA6.js";import"./useAnimationId-Dyo3RN72.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CpoNtx3K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BN2Pn2NB.js";import"./RegisterGraphicalItemId-B1XaVUU9.js";import"./ErrorBarContext-CKA9kOcR.js";import"./GraphicalItemClipPath-DYdMpFC-.js";import"./SetGraphicalItem-BCAQvLzI.js";import"./getZIndexFromUnknown-CjXV4BTV.js";import"./graphicalItemSelectors-F-CLsjSh.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
