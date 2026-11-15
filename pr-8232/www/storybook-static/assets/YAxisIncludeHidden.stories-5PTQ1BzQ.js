import{r as f,R as e}from"./iframe-Ca1UrYHb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis--Ne3LUdW.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DkJuOKqH.js";import{C as k}from"./ComposedChart-BQRHe03d.js";import{X as K}from"./XAxis-fyR759Im.js";import{L as v}from"./Legend-CKpK190F.js";import{B as a}from"./Bar-CwAC8FMr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Df_VmgSa.js";import"./Text-CG61ars6.js";import"./resolveDefaultProps-C7Zn3GIw.js";import"./ZIndexLayer-84bYvzQv.js";import"./index-DyyWsaDx.js";import"./index-BL3iJc3a.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BJjdmelv.js";import"./throttle-CQ25M_Sr.js";import"./axisSelectors-Dxz5Fo81.js";import"./d3-scale-BSpvxsSq.js";import"./CartesianAxis-C2LROGDs.js";import"./Layer-YpjF2SE4.js";import"./types-DxtdvItD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6Llf2gZ.js";import"./index-CGbgMVTZ.js";import"./index-CeJ-_gAW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DpgD45ps.js";import"./index-CXh6mJLx.js";import"./fillDefinitions-CGDilicc.js";import"./CartesianChart-Ahhse01G.js";import"./chartDataContext-Nvu6nj5u.js";import"./CategoricalChart-Cbl_4Ofw.js";import"./Symbols-DCcF1Btd.js";import"./symbol-C0Dz9CIF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-bheOR33N.js";import"./uniqBy-BWay3J3F.js";import"./iteratee-D2oTiGUc.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-HIGj4PG3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CrzCB3zu.js";import"./useAnimationId-Dpl0bF--.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-83_vs6lS.js";import"./tooltipContext-CWtAr1ZE.js";import"./ErrorBarContext-ChnkHwYk.js";import"./activeStyles-gkqlHaiP.js";import"./SetGraphicalItem-BYm76vy-.js";import"./getZIndexFromUnknown-B-4rVdsD.js";import"./useEffectiveDataKey-mZIPn9UL.js";import"./omit-COWJ3khx.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
