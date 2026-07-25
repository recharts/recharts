import{r as f,R as e}from"./iframe-5yXyXnaZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DrQXbr6a.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BDAt33KO.js";import{C as k}from"./ComposedChart-Dwgw5DNZ.js";import{X as K}from"./XAxis-DBNQ58f8.js";import{L as v}from"./Legend-ehOQxrBj.js";import{B as s}from"./Bar-vfktTcFK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B2yef_ws.js";import"./Layer-DvsJVPiG.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./Label-BYYKCmSa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DtzoUjMA.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./types-D9gPTTpR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./throttle-Cv9w3d5_.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./index-sztAkQPC.js";import"./axisSelectors-BXq32W01.js";import"./d3-scale-qreNZqM_.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./CategoricalChart-DQJ8zgbM.js";import"./Symbols-CHIguC1u.js";import"./symbol-DQ9BiUzn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CD3Qxymn.js";import"./uniqBy-BUqkqiyG.js";import"./iteratee-_t3hDaip.js";import"./tooltipContext-CvAnpwYG.js";import"./AnimatedItems-B7Ugi4uF.js";import"./useAnimationId-C0yd1tvr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D75afbJD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./ErrorBarContext-3caAFu0Q.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";import"./getZIndexFromUnknown-CWbr-zOK.js";import"./graphicalItemSelectors-BCn9O9wd.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
