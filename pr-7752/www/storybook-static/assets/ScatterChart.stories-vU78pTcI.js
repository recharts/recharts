import{R as t}from"./iframe-DJz24IKn.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CpwtAYeM.js";import{R as g}from"./zIndexSlice-CaAOW0et.js";import{X as S}from"./XAxis-BvHkm7Qz.js";import{Y as h}from"./YAxis-D-LGUrvE.js";import{S as A}from"./Scatter-Dq8AqzSK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DWus6mTf.js";import"./resolveDefaultProps-Y06lZ3Q4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dn-i2Eyh.js";import"./throttle-BsbtN1cS.js";import"./index-BNwKLvBG.js";import"./index-DbXeBKDO.js";import"./isWellBehavedNumber-fz8KERtX.js";import"./d3-scale-DpRdoN7U.js";import"./index-C__guRbQ.js";import"./index-C6YBLKF8.js";import"./renderedTicksSlice-Dg7Ny4_Y.js";import"./index-DMHuassP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnQAJVhL.js";import"./chartDataContext-Dgbqaxm0.js";import"./CategoricalChart-uGwJvut9.js";import"./CartesianAxis-Dg3lbTZ2.js";import"./Layer-CBv-uhLi.js";import"./Text-DOF1K2eH.js";import"./DOMUtils-bn8Tja0g.js";import"./useId-B5fw3oZO.js";import"./useBackwardsCompatibleTheme-LsfOWVY-.js";import"./Label-VNkqCN5V.js";import"./ZIndexLayer-Clw8d4Oc.js";import"./types-DwqEhWGa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CKV2EJWT.js";import"./useAnimationId-CK0cbgiG.js";import"./Curve-3bxMRdbj.js";import"./step-BwCbZBCr.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BiMelrIK.js";import"./Symbols-DerxF3g_.js";import"./symbol-zN9zL-V3.js";import"./ActiveShapeUtils-BKaKBNza.js";import"./RegisterGraphicalItemId-2YIIw7m6.js";import"./ErrorBarContext-BLLu5XO3.js";import"./GraphicalItemClipPath-CvjsKkOB.js";import"./SetGraphicalItem-npZ_hDhu.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,At as __namedExportsOrder,ht as default};
