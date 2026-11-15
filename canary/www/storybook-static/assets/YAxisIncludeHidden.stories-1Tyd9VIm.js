import{r as f,R as e}from"./iframe-wopH9NdI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DOwO43VE.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-xHMHa_PR.js";import{C as k}from"./ComposedChart-BEtvz8Ip.js";import{X as K}from"./XAxis-YQFRVy93.js";import{L as v}from"./Legend-byGWz5he.js";import{B as a}from"./Bar-DBONXf9b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-uu_QuzmT.js";import"./Text-CQcCEm7a.js";import"./resolveDefaultProps-CuS_1aTJ.js";import"./ZIndexLayer-BgWxLO1_.js";import"./index-DX2sAXBh.js";import"./index-ntp-0gr7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DDYJm4ns.js";import"./throttle--YLxHTYU.js";import"./axisSelectors-H_-dwi8o.js";import"./d3-scale-BRxJIguS.js";import"./CartesianAxis-Bp916XbH.js";import"./Layer-Dt0UmkGr.js";import"./types-CUlNVHV2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRp5IgAn.js";import"./index-CHX_ECB7.js";import"./index-xHMOPb5i.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-GnJJ2XUP.js";import"./index-BMZVXAmF.js";import"./fillDefinitions-DrqDcIvz.js";import"./CartesianChart-CN7jOg4q.js";import"./chartDataContext-bye5A1ly.js";import"./CategoricalChart-C9YwakJO.js";import"./Symbols-Bbx6wwO8.js";import"./symbol-BLs3oZkc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-hq6pQE.js";import"./uniqBy-BzWKwNSK.js";import"./iteratee-BU4RoL4-.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-B3xBZvqn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CG1wwImr.js";import"./useAnimationId-Dc36A72L.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DA6QXZNg.js";import"./tooltipContext-DhZ9obrk.js";import"./ErrorBarContext-DV4gDnhM.js";import"./activeStyles-DEvOqenA.js";import"./SetGraphicalItem-X1KxmELY.js";import"./getZIndexFromUnknown-mtzI5ccg.js";import"./useEffectiveDataKey-SyLvQhGM.js";import"./omit-DOGdPpnh.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
