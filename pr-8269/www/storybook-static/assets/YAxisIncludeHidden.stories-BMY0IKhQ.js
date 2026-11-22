import{r as f,R as e}from"./iframe-D3OoUODQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CK0GC31X.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-COWEW-Xi.js";import{C as k}from"./ComposedChart-DQRy8yMm.js";import{X as K}from"./XAxis-DxYJ1EU_.js";import{L as v}from"./Legend-BUCTIL7e.js";import{B as a}from"./Bar-nA39Hisg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DLZY1r_b.js";import"./Text-B7Tip8P2.js";import"./resolveDefaultProps-D7e-YcsR.js";import"./ZIndexLayer-pJsGLsvY.js";import"./index-BvJXc9H1.js";import"./index-DNUqbDgJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BlC5408P.js";import"./throttle-xK3Qigov.js";import"./axisSelectors-DItDxN6k.js";import"./d3-scale-Bhy6LUlh.js";import"./CartesianAxis-CVUrBvYb.js";import"./Layer-CUNP0nq5.js";import"./types-CZJIyhtF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bv3FRj9F.js";import"./index-CwGsCBa_.js";import"./index-E-9zXcGM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DuOKGUDD.js";import"./index-C8PiA1g3.js";import"./fillDefinitions-C2yGMN51.js";import"./CartesianChart-C7rzbaUy.js";import"./chartDataContext-BbEB-BoJ.js";import"./CategoricalChart-CKoarJJf.js";import"./Symbols-BcqMzhTU.js";import"./symbol-CCC5v9lz.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C-GaNZer.js";import"./uniqBy-UVF7xo-s.js";import"./iteratee-VlIYTG9d.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-k3Cv11yP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Sm9oSXXR.js";import"./useAnimationId-z8xHYNfC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--1e6XE9v.js";import"./tooltipContext-CJg0X2MT.js";import"./ErrorBarContext-Cw_znsk2.js";import"./activeStyles-DXsSD8Lh.js";import"./SetGraphicalItem-BlH5pIAO.js";import"./getZIndexFromUnknown-ijBmR_kd.js";import"./useEffectiveDataKey-BHKjwOuj.js";import"./omit-D5BHBEpf.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
