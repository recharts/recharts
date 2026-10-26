import{r as f,R as e}from"./iframe-DcaMyu57.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ctjpx2tI.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D63TC5wE.js";import{C as k}from"./ComposedChart-Ccm1rBcn.js";import{X as K}from"./XAxis-CpQfhxVu.js";import{L as v}from"./Legend-BonTCLAv.js";import{B as a}from"./Bar-CWFZ-DmD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CNqQQqDH.js";import"./Text-BDVAjJGp.js";import"./resolveDefaultProps-BIhtVjr1.js";import"./pageBackground-DJiDI2js.js";import"./useId-2CjiTV-a.js";import"./ZIndexLayer-BAtegXWd.js";import"./index-LUaWadAh.js";import"./index-C1eYPsJe.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8YroQFB.js";import"./throttle-DTKuFpeU.js";import"./dataEntryStyles-Dvqex9ju.js";import"./axisSelectors-DeMGjxl4.js";import"./d3-scale-CtXzbLe9.js";import"./CartesianAxis-CeZT8ZwV.js";import"./Layer-Buw-ejS2.js";import"./types-CezfUA9a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B7oGrXiB.js";import"./index-DhjSPGN6.js";import"./index-CGLqJivQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-s9QE5BnJ.js";import"./index-CZJeyZvE.js";import"./CartesianChart-Doy7puzJ.js";import"./chartDataContext-Cvuxfrl6.js";import"./CategoricalChart-Oo-gpddM.js";import"./Symbols-0k-WiD9E.js";import"./symbol-uzrYNuoI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZhsAoPk.js";import"./uniqBy-Debw3FXq.js";import"./iteratee-DfBVt2Tm.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DWP2-Wsz.js";import"./useAnimationId-CY8QIDMT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BG3wMj9I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EJ-BM8cF.js";import"./tooltipContext-BLvne3kB.js";import"./RegisterGraphicalItemId-Bf7_3i_n.js";import"./ErrorBarContext-4Q2l69vj.js";import"./SetGraphicalItem-CCEEUI7s.js";import"./getZIndexFromUnknown-DYOFYyvu.js";import"./useEffectiveDataKey-90ZX8Dti.js";import"./omit-y-u6NmAA.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
