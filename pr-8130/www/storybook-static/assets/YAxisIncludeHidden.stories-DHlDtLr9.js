import{r as f,R as e}from"./iframe-CrYQDt8P.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ibw-9rE8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DgBq9YFj.js";import{C as k}from"./ComposedChart-D3_qR-0w.js";import{X as K}from"./XAxis-ZRzZ6JbG.js";import{L as v}from"./Legend-BNrmNdlO.js";import{B as a}from"./Bar-EyEs2QDc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-_UeQKQwH.js";import"./Text-BvJLtM_q.js";import"./resolveDefaultProps-D-FE3-Id.js";import"./DOMUtils-Bh62H6aW.js";import"./ZIndexLayer-Dl5u_ANg.js";import"./index-DoHXxeqs.js";import"./index-Dn-vKA7B.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-qncpG9DL.js";import"./throttle-EZYco_S-.js";import"./axisSelectors-CHapoDkY.js";import"./d3-scale-B8VX6HZY.js";import"./CartesianAxis-DR-jLyCK.js";import"./Layer-BQFOl3cJ.js";import"./types-D5M-0McJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B5w1ipks.js";import"./index-DrQ3dvqS.js";import"./index-xzmL1NPl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BAwtrVn5.js";import"./index-OoIkvEPu.js";import"./fillDefinitions-B8rJsHrn.js";import"./CartesianChart-CUqOA5qE.js";import"./ZIndexPortal-Dn8m52P0.js";import"./CategoricalChart-BGIsMW5j.js";import"./Symbols-BEXEibvH.js";import"./symbol-_3oqr1nj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BR2Z5pZe.js";import"./uniqBy-CuoQtKoh.js";import"./iteratee-9w6c29G1.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-C_2TXPHb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BrqfjGXb.js";import"./useAnimationId-DhleLLtl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxrQGdht.js";import"./tooltipContext-aOt1cndd.js";import"./dataEntryStyles-D63lSB48.js";import"./ErrorBarContext-BkAsJpXU.js";import"./activeStyles-C1vUddIu.js";import"./SetGraphicalItem-BZH_NFgg.js";import"./getZIndexFromUnknown-CucohxNg.js";import"./useEffectiveDataKey-CniHgm4C.js";import"./omit-DXLoxxTI.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
