import{r as f,R as e}from"./iframe-UaiYvcjH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BCEqWUDI.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-8ciJYIbx.js";import{C as k}from"./ComposedChart-B4Fyi5OI.js";import{X as K}from"./XAxis-CK0z3Vz2.js";import{L as v}from"./Legend-DG3TQPMR.js";import{B as s}from"./Bar-CZ690Un0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D-49EUqg.js";import"./Text-D929lMpi.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./DOMUtils-C7Mhp4IV.js";import"./isWellBehavedNumber-nnrZFap8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DxXiKzAC.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./throttle-7x_Svn9H.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./d3-scale-Dc-s3w0P.js";import"./CartesianAxis-ebqqt3vU.js";import"./Layer-DOm2DEtl.js";import"./types-CAb7fg-d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./CategoricalChart-8pueoY18.js";import"./Symbols-ryqClyJC.js";import"./symbol-pW74Md_C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DqA-fEeq.js";import"./uniqBy-BHqTd4CP.js";import"./iteratee-BoSxLbTm.js";import"./tooltipContext-BuGDK7-Q.js";import"./AnimatedItems-DAGS26Tt.js";import"./useAnimationId-BTJ_iqsG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bha7Re6V.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./ErrorBarContext-CFINHyZq.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./getZIndexFromUnknown-BUXuLBsW.js";import"./graphicalItemSelectors-CqS9UHaD.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
