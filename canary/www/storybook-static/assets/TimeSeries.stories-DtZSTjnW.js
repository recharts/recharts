import{R as e}from"./iframe-D-xaWYx8.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CMZs7JPg.js";import{R as h}from"./zIndexSlice-D3SQ2MTt.js";import{C as g}from"./ComposedChart-BU0Kbz0Z.js";import{L as x}from"./Line-BZDALygc.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-fHLtEQjZ.js";import{T as V}from"./Tooltip-Dxi5xH2m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Df6qFn96.js";import"./Layer-BIK5Xkd-.js";import"./resolveDefaultProps-Js9uooEF.js";import"./Text-0YUR20e7.js";import"./pageBackground-DVX0bm4d.js";import"./ZIndexLayer-E_Dtb0Mx.js";import"./index-B0Sv0m1A.js";import"./index-CA946KFv.js";import"./Label-1rgKTcFA.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B6of_7Ld.js";import"./throttle-BmvgL6Rb.js";import"./types-Bc5RKUKD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-L8xFZ5qK.js";import"./index-DJEWl4Hb.js";import"./index-ByDoJ5qb.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DG_H3BOM.js";import"./RechartsWrapper-BqPcQfd6.js";import"./index-BBNxXXGk.js";import"./CartesianChart-Dmz6gYzC.js";import"./ZIndexPortal-BwYTG8oV.js";import"./CategoricalChart-q3kg2ZZV.js";import"./Curve-BcR2PIcQ.js";import"./step-Dvrj1lLE.js";import"./path-DyVhHtw_.js";import"./LabelList-ZtaAtRMQ.js";import"./ActivePoints-13gcbTTt.js";import"./Dot-Chr86R6e.js";import"./activeStyles-QtdqAqWx.js";import"./useAnimationId-CvbEaa0a.js";import"./dataEntryStyles-Dh5c7_-V.js";import"./Symbols-DPqFwa0y.js";import"./symbol-BsZHRk5J.js";import"./ErrorBarContext-ChtZm3AF.js";import"./SetGraphicalItem-DMIM43_P.js";import"./getRadiusAndStrokeWidthFromDot-CuwhE4ca.js";import"./ActiveShapeUtils-wywHDhQW.js";import"./useEffectiveDataKey-D7oticDs.js";import"./useElementOffset-gwYrbjUM.js";import"./uniqBy-BEACZ9BP.js";import"./iteratee-nU-bJWRc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BLSgl_wa.js";import"./Rectangle-DbRUJHHI.js";import"./util-Dxo8gN5i.js";import"./Sector-BClyFizE.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
