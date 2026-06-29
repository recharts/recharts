import{r as f,R as e}from"./iframe-BLwLvMjc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BeG492ya.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-f39TItqz.js";import{C as k}from"./ComposedChart-CxKCgcGS.js";import{X as K}from"./XAxis-ejI-Sa_I.js";import{L as v}from"./Legend-BMV_CWpJ.js";import{B as s}from"./Bar-C5QEOUex.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BkG6HND6.js";import"./CartesianAxis-BaKeQioI.js";import"./Layer-Bt0_PYLT.js";import"./resolveDefaultProps-BYhifOb3.js";import"./Text-D72Dyp1P.js";import"./DOMUtils-BokrT3el.js";import"./isWellBehavedNumber-CptpHwFR.js";import"./Label-pioiAs6J.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-YEu_ZQSO.js";import"./index-CX4CypQp.js";import"./index-BMdMuoJa.js";import"./types-WD3PBzf9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqNNgNfR.js";import"./immer-D_8Dczsi.js";import"./RechartsWrapper-B0n9oFWZ.js";import"./index-940TGUxY.js";import"./index-C34Ey_Rg.js";import"./axisSelectors-D58BkBim.js";import"./d3-scale-DDplI62N.js";import"./CartesianChart-C4yu5ilR.js";import"./chartDataContext-B-M33Z7B.js";import"./CategoricalChart-CRVqHKQs.js";import"./Symbols-JaxNqX0a.js";import"./symbol-DoLM06y1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BL78dp6_.js";import"./uniqBy-Du5aieGd.js";import"./iteratee-Wx63tvk5.js";import"./tooltipContext-BwB3jdXU.js";import"./AnimatedItems-BZKtZoic.js";import"./useAnimationId-CqDdhCYT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wKNM39ge.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-peAesLaa.js";import"./RegisterGraphicalItemId-BnK-7IkL.js";import"./ErrorBarContext-DWoI7kQ6.js";import"./GraphicalItemClipPath-DiOFFyuB.js";import"./SetGraphicalItem-DSxSXGHZ.js";import"./getZIndexFromUnknown-CNC0JZgj.js";import"./graphicalItemSelectors-DoeQmq6z.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
