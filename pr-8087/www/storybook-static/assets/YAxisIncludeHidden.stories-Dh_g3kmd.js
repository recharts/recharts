import{r as f,R as e}from"./iframe-DqyoK0ud.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-_lbVlQrz.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BLzMP0pQ.js";import{C as k}from"./ComposedChart-BYOmpYyX.js";import{X as K}from"./XAxis-BatUM5pq.js";import{L as v}from"./Legend-gHqRthhy.js";import{B as a}from"./Bar-D75AP1PQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C_IP7EJJ.js";import"./Text-2V5_vcbB.js";import"./resolveDefaultProps-Ck8pmjzH.js";import"./pageBackground-DCkPUiBo.js";import"./useId-DxxYvKaU.js";import"./ZIndexLayer-DDKk2bqL.js";import"./index-BsuCzGf5.js";import"./index-CssgCrFq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CBUZ9Z3j.js";import"./throttle-Dn4JCjly.js";import"./dataEntryStyles-sIqJlf-4.js";import"./axisSelectors-CFa3shM-.js";import"./d3-scale-oZSie1D-.js";import"./CartesianAxis-MuFUII6s.js";import"./Layer-svnx0Bdz.js";import"./types-DD3eyhWj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DhCNe_6s.js";import"./index-CtviIcDK.js";import"./index-BwS7ULIY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bv3_Hj5n.js";import"./index-wVxsoSnH.js";import"./CartesianChart-_Aa3OKSl.js";import"./chartDataContext-MbnhVXSW.js";import"./CategoricalChart-EiDYPGiV.js";import"./Symbols-CYwitPRM.js";import"./symbol-DWxTznCL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0YlHWpD.js";import"./uniqBy-CGKsPvnn.js";import"./iteratee-BKsZSq5H.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-D0nGCC2C.js";import"./useAnimationId-b5BOeEdT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DW2Nkmcm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HHjD57n-.js";import"./tooltipContext-Dh-jfrtk.js";import"./RegisterGraphicalItemId-DywfiWqL.js";import"./ErrorBarContext-CHgLAGYu.js";import"./SetGraphicalItem-DDAjd9Yt.js";import"./getZIndexFromUnknown-D1LNvxgr.js";import"./useEffectiveDataKey-D-FiIxk6.js";import"./omit-DwHp4S1F.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
