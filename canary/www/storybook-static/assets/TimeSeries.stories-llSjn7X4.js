import{R as e}from"./iframe-Knpgl7bH.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C-pGSkx8.js";import{R as h}from"./zIndexSlice-D_JvDPdC.js";import{C as g}from"./ComposedChart-Bz1qQazH.js";import{L as x}from"./Line-CN57dnng.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-loN--ZL0.js";import{T as V}from"./Tooltip-CLC2K7Jb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-d_ZDtRCQ.js";import"./Layer-BPxKddK_.js";import"./resolveDefaultProps-E9uQbFMh.js";import"./Text-2mzzLjyY.js";import"./ZIndexLayer-B7sLboyu.js";import"./index-CMcZZbu7.js";import"./index-flTgedm9.js";import"./Label-CUqt0NPv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-_ossNi2Y.js";import"./throttle-CxSZxpUT.js";import"./types-TSpqzzom.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhGylDYr.js";import"./index-DBy5LZ5m.js";import"./index-CtQ1gC2H.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DzWAhEt3.js";import"./RechartsWrapper-RFuLYV8r.js";import"./index-DCjquko5.js";import"./fillDefinitions-D-i4EmzR.js";import"./CartesianChart-BRDQdhrJ.js";import"./chartDataContext-DMJoTbMZ.js";import"./CategoricalChart-BP24IEWh.js";import"./getRadiusAndStrokeWidthFromDot-OQ1wYRa8.js";import"./Curve-CoppqT_1.js";import"./step-CX6BMVFF.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CP1LR4vd.js";import"./ActivePoints-CLrwMv3j.js";import"./Dot-B0z7ItJf.js";import"./activeStyles-Dx-Bb5mv.js";import"./useAnimationId-sq4gt-Rn.js";import"./Symbols-DbPd2MPF.js";import"./symbol-D5IcYaCj.js";import"./ErrorBarContext-CNCcQkpF.js";import"./SetGraphicalItem-CJ2jMQXm.js";import"./ActiveShapeUtils-DmSfMRR5.js";import"./useEffectiveDataKey-DbJ28nvU.js";import"./useElementOffset-lkTznI83.js";import"./uniqBy-BRZL2BBs.js";import"./iteratee-CHAMY_xX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CFbCQW-3.js";import"./Rectangle-DSFuXVLV.js";import"./util-Dxo8gN5i.js";import"./Sector-J3mzscDv.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
