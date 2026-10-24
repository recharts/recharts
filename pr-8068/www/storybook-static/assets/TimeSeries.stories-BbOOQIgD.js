import{R as e}from"./iframe-fRQcLAl5.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-YHoN4cJ8.js";import{R as h}from"./zIndexSlice-Dn-AwdFU.js";import{C as g}from"./ComposedChart-EXBPqiIb.js";import{L as x}from"./Line-DpSpydaT.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DfAPImNq.js";import{T as V}from"./Tooltip-ByfooWk2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-KAWGVqFX.js";import"./Layer-CbRW8QEs.js";import"./resolveDefaultProps-BSRNeAis.js";import"./Text-Cru6BjP5.js";import"./pageBackground-CEHLL-Ei.js";import"./isWellBehavedNumber-D73y1wlb.js";import"./useId-C-HGw4dN.js";import"./useBackwardsCompatibleTheme-BHb08z9X.js";import"./Label-B-GmpToQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cs8fSrLZ.js";import"./index-k5JxmCtc.js";import"./index-DGdlAhFZ.js";import"./dataEntryStyles-DAJ1H5Ij.js";import"./types-9LI4VHBg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-odeO7S.js";import"./throttle-D9yJ7HBS.js";import"./index-CvX2HSRN.js";import"./index-BMhLMrsl.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BcHvjcBD.js";import"./RechartsWrapper-UgoWSvvL.js";import"./index-0uuwnO43.js";import"./CartesianChart-78VpV4en.js";import"./chartDataContext-DbJ6pwXa.js";import"./CategoricalChart-BOoKbn6G.js";import"./Curve-CS-yaUma.js";import"./step-CpSFtT8B.js";import"./path-DyVhHtw_.js";import"./activeStyles-mU47mh7y.js";import"./useAnimationId-BA218cv-.js";import"./ActivePoints-D7vn9lL2.js";import"./Dot-CoF5eEMQ.js";import"./RegisterGraphicalItemId-B0TmU9i7.js";import"./ErrorBarContext-DLnk70v-.js";import"./GraphicalItemClipPath-DvSzn1zw.js";import"./SetGraphicalItem-fs95wN3Y.js";import"./getRadiusAndStrokeWidthFromDot-BW7yBTjT.js";import"./ActiveShapeUtils-DqrHb297.js";import"./useEffectiveDataKey-H8Jal8DL.js";import"./useElementOffset-BrWRK1of.js";import"./uniqBy-CluqMtWA.js";import"./iteratee-CLrT16T3.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cp9Y6JoO.js";import"./Rectangle-DEwZ1key.js";import"./util-Dxo8gN5i.js";import"./Sector-CIORA0ys.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
