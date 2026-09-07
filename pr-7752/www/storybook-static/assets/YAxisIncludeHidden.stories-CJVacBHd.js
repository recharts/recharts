import{r as f,R as e}from"./iframe-DJz24IKn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D-LGUrvE.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CaAOW0et.js";import{C as k}from"./ComposedChart-xCfhu6hO.js";import{X as K}from"./XAxis-BvHkm7Qz.js";import{L as v}from"./Legend-8QayZjLh.js";import{B as a}from"./Bar-4Yj2w0Gm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-VNkqCN5V.js";import"./Text-DOF1K2eH.js";import"./resolveDefaultProps-Y06lZ3Q4.js";import"./DOMUtils-bn8Tja0g.js";import"./isWellBehavedNumber-fz8KERtX.js";import"./useId-B5fw3oZO.js";import"./useBackwardsCompatibleTheme-LsfOWVY-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Clw8d4Oc.js";import"./index-BNwKLvBG.js";import"./index-DbXeBKDO.js";import"./RechartsWrapper-DWus6mTf.js";import"./axisSelectors-Dn-i2Eyh.js";import"./throttle-BsbtN1cS.js";import"./d3-scale-DpRdoN7U.js";import"./index-C__guRbQ.js";import"./index-C6YBLKF8.js";import"./renderedTicksSlice-Dg7Ny4_Y.js";import"./index-DMHuassP.js";import"./CartesianAxis-Dg3lbTZ2.js";import"./Layer-CBv-uhLi.js";import"./types-DwqEhWGa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CnQAJVhL.js";import"./chartDataContext-Dgbqaxm0.js";import"./CategoricalChart-uGwJvut9.js";import"./Symbols-DerxF3g_.js";import"./symbol-zN9zL-V3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CceHZgWF.js";import"./uniqBy-BmN8ddO_.js";import"./iteratee-BEbzn8gE.js";import"./AnimatedItems-CKV2EJWT.js";import"./useAnimationId-CK0cbgiG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGv_Gg_1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BKaKBNza.js";import"./tooltipContext-BiMelrIK.js";import"./RegisterGraphicalItemId-2YIIw7m6.js";import"./ErrorBarContext-BLLu5XO3.js";import"./GraphicalItemClipPath-CvjsKkOB.js";import"./SetGraphicalItem-npZ_hDhu.js";import"./getZIndexFromUnknown-BC4hsdgn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-z2pv7TYv.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
