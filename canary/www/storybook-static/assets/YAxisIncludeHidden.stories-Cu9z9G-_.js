import{r as f,R as e}from"./iframe-CGx2OEYg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BsBoxekz.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-pdvjw9VY.js";import{C as k}from"./ComposedChart-Fb2MFzqr.js";import{X as K}from"./XAxis-DIPoApAz.js";import{L as v}from"./Legend-CWe23moz.js";import{B as s}from"./Bar-CN5yHzzq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CzV2OpXY.js";import"./CartesianAxis-CmH7UKiI.js";import"./Layer-CdlD8-Bq.js";import"./resolveDefaultProps-D3B6MFw_.js";import"./Text-JACEtH7g.js";import"./DOMUtils-Ccjd7ivz.js";import"./isWellBehavedNumber-CKQRWs7o.js";import"./Label-CkpiET6q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGG-pQT2.js";import"./index-C4Z_dumW.js";import"./index-BL6WHaeN.js";import"./types-C4QX8ert.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CWw-Qe8F.js";import"./immer-BdXE1DYA.js";import"./RechartsWrapper-CnFoLhZv.js";import"./index-CIdFwa8F.js";import"./index-Cey4EIAC.js";import"./axisSelectors-B0UwcuKI.js";import"./d3-scale-DUV6_L5z.js";import"./CartesianChart-BiUQ--Jb.js";import"./chartDataContext-BDew7MkD.js";import"./CategoricalChart-DuzT5byy.js";import"./Symbols-BZnVYgxJ.js";import"./symbol-Bhi30j9H.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kXeLLBXV.js";import"./uniqBy-D7gZTNBj.js";import"./iteratee-QFBEUu-H.js";import"./tooltipContext-CyJlnooR.js";import"./AnimatedItems-ZpkkXdAG.js";import"./useAnimationId-DrQktf3K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CsueepJD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BMsaHZ8h.js";import"./RegisterGraphicalItemId-xU42uzR6.js";import"./ErrorBarContext-Gbubk7c-.js";import"./GraphicalItemClipPath-CIDK8z3L.js";import"./SetGraphicalItem-CM0l2hGK.js";import"./getZIndexFromUnknown-BhVnwvKh.js";import"./graphicalItemSelectors-DkJdRZ6w.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
