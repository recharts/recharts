import{r as f,R as e}from"./iframe-DQVzMSYD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C77qq_aV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-COaPk7HG.js";import{C as k}from"./ComposedChart-C_Pl0aog.js";import{X as K}from"./XAxis-EcPa3Cb-.js";import{L as v}from"./Legend-DU-_KOMG.js";import{B as a}from"./Bar-BO1LvaVO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D0zJX0d_.js";import"./Text-CPLLX1IN.js";import"./resolveDefaultProps-B_q_xmSS.js";import"./pageBackground-Bn8h5x5L.js";import"./useId-DXg-zq7I.js";import"./ZIndexLayer-BnIZToy7.js";import"./index-BwLkx-9j.js";import"./index-E8O3UkuU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BSp_MBDw.js";import"./throttle-RO9RTr3r.js";import"./dataEntryStyles-CJ67-Ft7.js";import"./axisSelectors-D2aZ2Nk7.js";import"./d3-scale-CB3Nn2aV.js";import"./CartesianAxis-D4euaSSo.js";import"./Layer-Bj9bz4HQ.js";import"./types-DP1nwDJM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-h-EAnLPI.js";import"./index-mH-U0iC2.js";import"./index-BedQbpOM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C-LDIUUV.js";import"./index-eU6OKF0g.js";import"./CartesianChart-DUEad30c.js";import"./chartDataContext-FD6VhEJQ.js";import"./CategoricalChart-Doih-QNH.js";import"./Symbols-CiPXHPgW.js";import"./symbol-C1jDOFfw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DyUzreY7.js";import"./uniqBy-BJn9ALDR.js";import"./iteratee-BPCNyx3w.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BOapb_qi.js";import"./useAnimationId-BChg9XFS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BkBeu2DV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cp3IBj9J.js";import"./tooltipContext-CAUFXK5m.js";import"./RegisterGraphicalItemId-B0YbUPXE.js";import"./ErrorBarContext-CI8iDnvM.js";import"./SetGraphicalItem-DFlRgyvC.js";import"./getZIndexFromUnknown-CXyeEP5O.js";import"./useEffectiveDataKey-CkAzTA5N.js";import"./omit-Db9RjaTb.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
