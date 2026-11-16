import{R as e}from"./iframe-DBZHgkHz.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bnvf5Lo_.js";import{R as h}from"./zIndexSlice-CCEect8Y.js";import{C as g}from"./ComposedChart-69aI63gR.js";import{L as x}from"./Line-R8h2aTlS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CCNti6RY.js";import{T as V}from"./Tooltip-D6OO7ro2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BUQjH22T.js";import"./Layer-D9n5kKSs.js";import"./resolveDefaultProps-Bvsyp51I.js";import"./Text-DbdJ2rHF.js";import"./ZIndexLayer-BEGts5gU.js";import"./index-DGbD_6uH.js";import"./index-EJLKzrUV.js";import"./Label-rCJ8JAiM.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BLShzrWN.js";import"./throttle-VBcNMDCY.js";import"./types-CiZDyVvS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsR53_S1.js";import"./index-CyqgVO8h.js";import"./index-BWY5Ai4-.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CuFbzFkp.js";import"./RechartsWrapper-CdEOi8nf.js";import"./index-D7sJrNgb.js";import"./fillDefinitions-CJlHmTcA.js";import"./CartesianChart-B8ylmrv_.js";import"./chartDataContext-l1L_LONz.js";import"./CategoricalChart-Bed811or.js";import"./Curve-BXZ-CwEQ.js";import"./step-Dfu77DD6.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C2eRsswd.js";import"./ActivePoints-DL3AO8Rf.js";import"./Dot-BMzut5pd.js";import"./activeStyles-Ccn_YinS.js";import"./useAnimationId-DSFmvkxj.js";import"./Symbols-Dffl-I8q.js";import"./symbol-BsRW9Z6s.js";import"./ErrorBarContext-D4CjkMQU.js";import"./SetGraphicalItem-CyD7jeIx.js";import"./getRadiusAndStrokeWidthFromDot-B9CvVbbz.js";import"./ActiveShapeUtils-DHVoZWQX.js";import"./useEffectiveDataKey-jt0Z3g1O.js";import"./useElementOffset-lqrBTYbX.js";import"./uniqBy-4s5Lfnt3.js";import"./iteratee-DHow2gXt.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C3CL5bTC.js";import"./Rectangle-DkLsbkp1.js";import"./util-Dxo8gN5i.js";import"./Sector-KqGDdt6j.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
