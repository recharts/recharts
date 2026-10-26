import{r as f,R as e}from"./iframe-tfhlM7RE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-h2SUOBLw.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B471v4Lb.js";import{C as k}from"./ComposedChart-CtzbjDUj.js";import{X as K}from"./XAxis-B7I9Q0Cl.js";import{L as v}from"./Legend-R90rLnQ8.js";import{B as a}from"./Bar-pTnDyAVt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dc9_QYO6.js";import"./Text-5W0Vtyw-.js";import"./resolveDefaultProps-DL75x_1S.js";import"./pageBackground-0qhqc0cB.js";import"./useId-Bzzww67M.js";import"./ZIndexLayer-C-CGrvp9.js";import"./index-BTN7W_Yl.js";import"./index-lTJQPG4X.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BpOt7LI8.js";import"./throttle-CXjKONS2.js";import"./dataEntryStyles-D3tcZitS.js";import"./axisSelectors-DJx7DAnJ.js";import"./d3-scale-D6t4zM3P.js";import"./CartesianAxis-DyvVeGzf.js";import"./Layer-BL0J2r_i.js";import"./types-D9bKTCt9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DbMZHvdq.js";import"./index-Dv3JWEH0.js";import"./index-HYmTeb2Q.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DDpiUUXi.js";import"./index-MeXGvWIN.js";import"./CartesianChart-DU4kdG2u.js";import"./chartDataContext-DaAlq-l7.js";import"./CategoricalChart-CUmY4tZ5.js";import"./Symbols-B52ZExKH.js";import"./symbol-BSe1lArF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-COxlkJtV.js";import"./uniqBy-tG89lOwe.js";import"./iteratee-cVMjOz7p.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BEaPJgw0.js";import"./useAnimationId-BfuVUtmA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYTDxp40.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJsr9xRk.js";import"./tooltipContext-D3OGS0fz.js";import"./RegisterGraphicalItemId-KBiFRx-Y.js";import"./ErrorBarContext-WVyXc6eb.js";import"./SetGraphicalItem-nKtDGPi3.js";import"./getZIndexFromUnknown-BbOLndiI.js";import"./useEffectiveDataKey-Vj1bvM5G.js";import"./omit-qKxEFnb5.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
