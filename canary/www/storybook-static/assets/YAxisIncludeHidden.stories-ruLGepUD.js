import{r as f,R as e}from"./iframe-CFiYbyYn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DQzPAn8l.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CfnjI_J7.js";import{C as k}from"./ComposedChart-AVSPcUwt.js";import{X as K}from"./XAxis-RpmZ_jE_.js";import{L as v}from"./Legend-CeRiVCN4.js";import{B as a}from"./Bar-0HoGx8JR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BO6v_mC5.js";import"./Text-BvA3DBG3.js";import"./resolveDefaultProps-D5Jgld6M.js";import"./ZIndexLayer-BDfLEL3A.js";import"./index-BgXu95am.js";import"./index-D8Rvzs5o.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C73NV54c.js";import"./throttle-C32GRzNi.js";import"./axisSelectors-ZJRlSH7p.js";import"./d3-scale-BQZOe2uw.js";import"./CartesianAxis-D_9vstbH.js";import"./Layer-BfyvsZKx.js";import"./types-BgyTt6P7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DEUuAR6D.js";import"./index-CeN26RCh.js";import"./index-B2eeTemT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DnJ3Lnfw.js";import"./index-CTcpyI6-.js";import"./fillDefinitions-DQn9hMkI.js";import"./CartesianChart-BI7GK76V.js";import"./chartDataContext-CxLvIdoH.js";import"./CategoricalChart-CA4HG4Fk.js";import"./Symbols-dPAJMo6f.js";import"./symbol-aLQJyVpc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B4AwO3QR.js";import"./uniqBy-4Wq1ZNuh.js";import"./iteratee-B-Fq5cCX.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CEdPYhQz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BSxvUYTo.js";import"./useAnimationId-BDSeKkxz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CsNOZNpW.js";import"./tooltipContext-DxjlgEeX.js";import"./ErrorBarContext-DjJwPTFH.js";import"./activeStyles-P0GMx-UH.js";import"./SetGraphicalItem-CGu2i_Hy.js";import"./getZIndexFromUnknown-Dvyr5NgR.js";import"./useEffectiveDataKey-Dy2gs8KS.js";import"./omit-D6WkDfSd.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
