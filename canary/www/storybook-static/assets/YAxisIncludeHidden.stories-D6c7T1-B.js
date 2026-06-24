import{r as f,R as e}from"./iframe-CtzYfaFS.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-IWkh__zP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CHFLQ-iB.js";import{C as k}from"./ComposedChart-XEkgpTLA.js";import{X as K}from"./XAxis-oAw543sJ.js";import{L as v}from"./Legend-CiR3j6vn.js";import{B as s}from"./Bar-CP-Z820k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BsiXY17Z.js";import"./CartesianAxis-BA_E2N7m.js";import"./Layer-BYFEOVHG.js";import"./resolveDefaultProps-B4yZFq1_.js";import"./Text-EAXDgmFv.js";import"./DOMUtils-CZaHz23v.js";import"./isWellBehavedNumber-C_JD1Sao.js";import"./Label-vhEl4j2z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBCChzpw.js";import"./index-B_3CFrL4.js";import"./index-CS7Z3m5_.js";import"./types-BhOKl2M1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyXKwvU2.js";import"./immer-5-WksSwG.js";import"./RechartsWrapper-DtAkHf5u.js";import"./index-CQyW4Cl8.js";import"./index-B8ynkf98.js";import"./axisSelectors-C9oTN7aY.js";import"./d3-scale-Dsn_Yuxt.js";import"./CartesianChart-DLLDguMM.js";import"./chartDataContext-CAcvyAd0.js";import"./CategoricalChart-CwCdJGlO.js";import"./Symbols-BZg8aTao.js";import"./symbol-Cw8G4fgp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DkrRKcsg.js";import"./uniqBy-CBSkEntb.js";import"./iteratee-BJLAzLHV.js";import"./tooltipContext-BlURvFRM.js";import"./AnimatedItems-CFTPfFdo.js";import"./useAnimationId-Dat_OdBO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bPdK07Y6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bjb6cUC6.js";import"./RegisterGraphicalItemId-C98AlHEB.js";import"./ErrorBarContext-Bj7SM4UW.js";import"./GraphicalItemClipPath-DEcca-2A.js";import"./SetGraphicalItem-CIPU0D-S.js";import"./getZIndexFromUnknown-EGCEhs6i.js";import"./graphicalItemSelectors-oXMVx2vT.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
