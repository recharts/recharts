import{r as f,R as e}from"./iframe-CXZlrf2U.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DfNp35yd.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BjX2jCNd.js";import{C as k}from"./ComposedChart-Cd7Rssjf.js";import{X as K}from"./XAxis-CiwCXYrG.js";import{L as v}from"./Legend-B1ZRCfGH.js";import{B as a}from"./Bar-DPtL4Ihf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DMZfCKi2.js";import"./Text-ypQmpcnA.js";import"./resolveDefaultProps-DzsDYtS8.js";import"./ZIndexLayer-oMBe6LXA.js";import"./index-BXews0N3.js";import"./index-BQ37V211.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C9d2CYxT.js";import"./throttle-CeMcgCrB.js";import"./axisSelectors-CXSRT8oe.js";import"./d3-scale-BmN7CMF4.js";import"./CartesianAxis-BaftQfIs.js";import"./Layer-cEFsn6Cd.js";import"./types-BoOwr3-k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNKxG0p9.js";import"./index-CPNldOVQ.js";import"./index-Dwq43-hP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DH-5ZOsj.js";import"./index-B6CEgg-5.js";import"./fillDefinitions-CXni0F_U.js";import"./CartesianChart-BF67_Mbn.js";import"./chartDataContext-Cr6H1IFD.js";import"./CategoricalChart-C5S6zTyC.js";import"./Symbols-BDMCO_-i.js";import"./symbol-BZ1H3BIy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cf7KVjqL.js";import"./uniqBy--p3p2aBD.js";import"./iteratee-BIhFTfdN.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CAbAzZrW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C40_qBeq.js";import"./useAnimationId-Bvdrz9cO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DAjhd_ui.js";import"./tooltipContext-DbqUiVvs.js";import"./ErrorBarContext-Bx2AhXHF.js";import"./activeStyles-guaYkALv.js";import"./SetGraphicalItem-GFUHKXGI.js";import"./getZIndexFromUnknown-BB0YSVfx.js";import"./useEffectiveDataKey-ojW0Z0fn.js";import"./omit-BMiIzteC.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
