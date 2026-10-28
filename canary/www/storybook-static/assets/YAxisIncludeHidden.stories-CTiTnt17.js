import{r as f,R as e}from"./iframe-BXyks5nv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-8vdoPbT3.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DGicPDgx.js";import{C as k}from"./ComposedChart-DVDq1QlG.js";import{X as K}from"./XAxis-CgBDJfd7.js";import{L as v}from"./Legend-H_XBE5mI.js";import{B as a}from"./Bar-uTMPVT3q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DVoMofK2.js";import"./Text-DpKdLlQu.js";import"./resolveDefaultProps-t9RGNc5u.js";import"./pageBackground-ButgTNwE.js";import"./ZIndexLayer-aWdCgojo.js";import"./index-Brvwee9M.js";import"./index-W4KahICV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMqgJFL7.js";import"./throttle-BMtt0Eqt.js";import"./axisSelectors-58u8_YZx.js";import"./d3-scale-BgObkVdI.js";import"./CartesianAxis-BC_l_0hm.js";import"./Layer-x02rJScX.js";import"./types-DxlZCjsw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kjkWbf2b.js";import"./index-DYE61kxi.js";import"./index-CNe8-YXd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ybz91CxZ.js";import"./index-Ci615jxM.js";import"./CartesianChart-BvGgkH75.js";import"./ZIndexPortal-97xDukRB.js";import"./CategoricalChart-BARINQPN.js";import"./Symbols-B41tlq-V.js";import"./symbol-CQEHnXxm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-UnC9RugP.js";import"./uniqBy-CPmH6AFC.js";import"./iteratee-E2moU9SK.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BWqHNOr4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ozvy3-Co.js";import"./useAnimationId-DXaogzGC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6rYuavq.js";import"./tooltipContext-JspXPy5S.js";import"./dataEntryStyles-stu4dp7O.js";import"./ErrorBarContext-B3eXKAAe.js";import"./activeStyles-CF_8K1QH.js";import"./SetGraphicalItem-CyPK3B5U.js";import"./getZIndexFromUnknown-CMXoB80-.js";import"./useEffectiveDataKey-BzrOPzFS.js";import"./omit-BEEzFRQP.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
